import React from 'react';
import { categoryService } from '../../services/category/category.service';
import { withStyles } from '@material-ui/core/styles';
import { Container, Select, MenuItem, Button, Grid, Typography, FormControl, TextField, InputLabel, Input, Dialog, DialogTitle, DialogActions } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import { serviceService } from '../../services/service/service.service';
import { Redirect } from 'react-router';
import { toast } from 'react-toastify';
import { authenticationService } from '../../services/authentication/authentication.service';

const styles = () => ({
	formControl: {
		width: '100%',
	},
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

class EditService extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			service: null,
			categories: [],
			chosenCategoryNames: [],
			redirectService: false,
			redirectOwnUser: false,
			openAlert: false

		};
		
		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleOnChangeCategories = this.handleOnChangeCategories.bind(this);
		this.submit = this.submit.bind(this);
		this.deleteService = this.deleteService.bind(this);
		this.handleClickCancel = this.handleClickCancel.bind(this);
		this.handleClickDelete = this.handleClickDelete.bind(this);
		this.handleClickOpen = this.handleClickOpen.bind(this);
	}

	handleClickOpen() {
		this.setState({openAlert: true});
	}

	handleClickCancel(){
		this.setState({openAlert: false});
	}

	handleClickDelete() {
		this.setState({openAlert: false});
		this.deleteService();
	}

    
	componentDidMount() {
		categoryService.getAll()
			.then(data => {
				this.setState({categories: data});
			}, () => {
				toast.error(this.props.t('getcategoriesnotifyfail'), {
					position: toast.POSITION.BOTTOM_RIGHT
				});
				this.setState({redirectService: true});
			});
            
		// Gets the tutorInfo Id so it can be connected to the service
		serviceService.getDetailedById(this.props.match.params.id)
			.then(service => {
				this.setState({service: service});
				let chosenCategoryNames = [];
				this.state.service.categories.forEach(category => {
					chosenCategoryNames.push(category.name);
				});
				this.setState({chosenCategoryNames: chosenCategoryNames});

				// Checks if the creator of the service is the user that is logged in
				if(authenticationService.getCurrentUserId() !== this.state.service.tutorInfo.user.id) {
					toast.error(this.props.t('unauthorized'), {
						position: toast.POSITION.BOTTOM_RIGHT
					});
					this.setState({redirectService: true});
				}
			}, () => {
				toast.error(this.props.t('getservicenotifyfail'), {
					position: toast.POSITION.BOTTOM_RIGHT
				});
				this.setState({redirectService: true});
			});
	}
    
	handleOnChange(event) {
		let service = this.state.service;
		service[event.target.name] = event.target.value;
		this.setState({service: service});
	}

	handleOnChangeCategories(event) {
		let chosenCategoryNames = this.state.chosenCategoryNames;
		chosenCategoryNames = event.target.value;
		this.setState({chosenCategoryNames: chosenCategoryNames});
	}

	submit() {
		this.addChosenCategories();
		if(this.state.service.categories === undefined || this.state.service.categories.length === 0) {
			toast.error(this.props.t('saveservicenotifyfail'), {
				position: toast.POSITION.BOTTOM_RIGHT
			});
			return;
		}
		serviceService.edit(this.state.service)
			.then(() => {
				toast.success(this.props.t('saveservicenotifysuccess'), {
					position: toast.POSITION.BOTTOM_RIGHT
				});
				this.setState({redirectService: true});
			}, () => {
				toast.error(this.props.t('saveservicenotifyfail'), {
					position: toast.POSITION.BOTTOM_RIGHT
				});
			});
	}

	deleteService() {
		serviceService.deleteService(this.props.match.params.id)
			.then(() => {
				toast.success(this.props.t('deleteservicenotifysuccess'), {
					position: toast.POSITION.BOTTOM_RIGHT
				});
				this.setState({redirectOwnUser: true});
			}, () => {
				toast.error(this.props.t('deleteservicenotifyfail'), {
					position: toast.POSITION.BOTTOM_RIGHT
				});
			});
	}

	addChosenCategories() {
		let chosenCategories = [];
		const chosenCategoryNames = this.state.chosenCategoryNames;
		let service = this.state.service;
		chosenCategoryNames.forEach(catName => {
			chosenCategories.push(this.state.categories.find(x => x.name === catName));
		});
		service.categories = chosenCategories;
		this.setState({service: service});
	}
    
	menuItems(suggestions) {
		return suggestions.map((value) => (
			<MenuItem key={value.id} value={value.name} >
				{value.name}
			</MenuItem>
		));
	}
    
	render() {
		const{classes, t} = this.props;

		if(this.state.redirectService) {
			return <Redirect to={'/service/' + this.state.service.id}/>;
		}
		else if(this.state.redirectOwnUser) {
			return <Redirect to={'/user/' + authenticationService.getCurrentUserId()}/>;
		}
		else
		{	
			return this.state.service ? (
				<Container maxWidth="sm">
					<Typography variant="h4" component="h4" align="center">
						{t('editservice')}
					</Typography>
					<FormControl  noValidate autoComplete="off" className={classes.formControl}>
						<Grid container spacing={2} direction="row">
							<Grid item xs={12}>
								<TextField
									variant="outlined"
									margin="normal"
									fullWidth
									value={this.state.service.name}
									onChange={this.handleOnChange}
									id="name"
									label={t('editservicename')}
									name="name"
									autoComplete="name"
									autoFocus
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									id="outlined-textarea"
									label={t('description')}
									name={'description'}
									value={this.state.service.description}
									multiline
									onChange={this.handleOnChange}
									fullWidth
									margin="normal"
									variant="outlined"
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControl  noValidate autoComplete="off" className={classes.formControl}>
									<InputLabel className={classes.inputLabel} id="categories">{t('categories')}</InputLabel>
									<Select 
										fullWidth
										input={<Input />}
										labelId="categories"
										value={this.state.chosenCategoryNames}
										onChange={this.handleOnChangeCategories}
										name="categories"
										variant="outlined"
										renderValue={selected => {
											if(selected.length === 0) {
												return null; }
											else {
												return selected.map(cat => {
													return cat;
												}).join(', ');	
											}
										}}
										MenuProps={MenuProps}
										multiple>
										{this.menuItems(this.state.categories)}
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<Button type="submit" fullWidth variant="contained" color="primary" onClick={this.submit}>
									{t('save')}
								</Button>
							</Grid>
							<Grid item xs={12}>
								<Button type="button" fullWidth variant="contained" color="secondary" onClick={this.handleClickOpen}>
									{t('delete')}
								</Button>
							</Grid>
							<Grid item xs={12}>
								<Dialog
									open={this.state.openAlert}
									onClose={this.handleClickCancel}
									aria-labelledby="alert-dialog-title"
									aria-describedby="alert-dialog-description"
								>
									<DialogTitle id="alert-dialog-title">{t('deleteservicealerttitle')}</DialogTitle>
									<DialogActions>
										<Button onClick={this.handleClickCancel} color="primary" variant="contained">
											{t('cancel')}
										</Button>
										<Button onClick={this.handleClickDelete} color="secondary" autoFocus variant="contained">
											{t('delete')}
										</Button>
									</DialogActions>
								</Dialog>
							</Grid>
						</Grid>
					</FormControl>	
				</Container>
			) : null;
		}								
	}
}
export default withTranslation()(withStyles(styles)(EditService));