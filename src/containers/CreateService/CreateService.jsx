import React from 'react';
import { categoryService } from '../../services/category/category.service';
import { withStyles } from '@material-ui/core/styles';
import { Container, Select, MenuItem, Button, Grid, Typography, FormControl, TextField, InputLabel, Input} from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import { serviceService } from '../../services/service/service.service';
import { authenticationService } from '../../services/authentication/authentication.service';
import { userService } from '../../services/user/user.service';
import { Redirect } from 'react-router';

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

class CreateService extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			service: {
				description: '',
				name: '',
				tutorInfo: {
					id: ''
				},
				categories: []
			},
			categories: [],
			chosenCategoryNames: [],
			redirect: false
		};
        
		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleOnChangeCategories = this.handleOnChangeCategories.bind(this);
		this.submit = this.submit.bind(this);
	}
    
	componentDidMount() {
		categoryService.getAll().then(data => {
			this.setState({categories: data});
		});
		let service = this.state.service;
		// Gets the tutorInfo Id so it can be connected to the service
		userService.getTutorInfoByUserId(authenticationService.getCurrentUserId())
			.then(tutorInfo => {
				service.tutorInfo.id = tutorInfo.id;
			})
			.catch(error => {
				// TODO Error message to user with toastify
			});
		this.setState({service: service});
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
		serviceService.create(this.state.service)
			.then(() => {
				// TODO: Redirect to show service page
				this.setState({redirect: true});
			})
			.catch(() => {
				// TODO: give error message to user with toastify
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

		if(this.state.redirect) {
			// TODO Redirect to show service page
			return <Redirect to="/admin"/>;
		}
		else
		{	
			return (
				<Container maxWidth="sm">
					<Typography variant="h4" component="h4" align="center">
						{t('createaservice')}
					</Typography>
					<FormControl  noValidate autoComplete="off" className={classes.formControl}>
						<Grid container spacing={2} direction="row">
							<Grid item xs={12}>
								<TextField
									variant="outlined"
									margin="normal"
									fullWidth
									onChange={this.handleOnChange}
									id="name"
									label={t('createservicename')}
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
								<Button type="submit" fullWidth variant="contained" color="inherit" onClick={this.submit}>
									{t('save')}
								</Button>
							</Grid>
						</Grid>
					</FormControl>	
				</Container>
			);
		}								
	}
}

export default withTranslation()(withStyles(styles)(CreateService));