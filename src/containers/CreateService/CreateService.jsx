import React from 'react';
import { categoryService } from '../../services/category/category.service';
import { withStyles } from '@material-ui/core/styles';
import { Container, Select, MenuItem, Button, Grid, Typography, FormControl, TextField, InputLabel, Input} from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import { serviceService } from '../../services/service/service.service';
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

class CreateService extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			service: {
				description: '',
				name: '',
				tutorInfo: {},
				categories: []
			},
			categories: [],
		};
        
		this.handleOnChange = this.handleOnChange.bind(this);
	}
    
	componentDidMount() {
		categoryService.getAll().then(data => {
			this.setState({categories: data});
		});
		let service = this.state.service;
		console.log(authenticationService.currentUserValue);
		console.log(authenticationService.currentUser);
		//service[tutorInfo] = authenticationService.currentUserValue

	}
    
	handleOnChange(event) {
		let service = this.state.service;
		service[event.target.name] = event.target.value;
		this.setState({service: service});
	}

	submit() {
		serviceService.create(this.state.service)
			.then(
				// Redirect to a page that shows the created service
			)
			.catch(
				// Give error feedback to user
			);
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
		return(
			<> 
				<Container maxWidth="sm">
					<Typography title="h1">
						Create a service
					</Typography>
					<FormControl  noValidate autoComplete="off" className={classes.formControl}>
						<Grid container spacing={2} direction="row">
							<Grid item xs={12}>
								<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									id={'name'}
									label={('Name')}
									name={'name'}
									autoComplete={'name'}
									autoFocus
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									id="outlined-textarea"
									label="Description"
									multiline
									fullWidth
									margin="normal"
									variant="outlined"
								/>
							</Grid>
						
							<Grid item xs={12}>
								<FormControl  noValidate autoComplete="off" className={classes.formControl}>
									<InputLabel className={classes.inputLabel} id="categories">Categories</InputLabel>
									<Select 
										fullWidth
										input={<Input />}
										labelId="categories"
										value={this.state.service.categories}
										onChange={this.handleOnChange}
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
								Save
								</Button>
							</Grid>

						</Grid>
					</FormControl>
					
				</Container>

				
			</>
		);

	}
}

export default withTranslation()(withStyles(styles)(CreateService));