import React from 'react';
import { categoryService } from '../../services/category/category.service';
import { Container, Select, MenuItem } from '@material-ui/core';

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

			categories: []
		};
        
		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleCategoriesChange = this.handleCategoriesChange.bind(this);
	}
    
	componentDidMount() {
		categoryService.getAll().then(data => {
			this.setState({categories: data});
		});
	}
    
	handleOnChange(event) {
		let service = this.state.service;
		service[event.target.name] = event.target.value;
		this.setState({service: service});
	}
    
	handleCategoriesChange(event) {
		let service = this.state.service;
		service.categories.push(event);
		this.setState({service: service});
	}
    
	menuItems(suggestions) {
		return suggestions.map((value, i) => (
			<MenuItem key={i} value={value.name}>
				{value.name}
			</MenuItem>
		));
	}
    
	render() {
		return(
			<> 
				<Container maxWidth="sm">
					<Select
						fullWidth
						name="categories"
						value={this.state.service.categories}
						onChange={this.handleCategoriesChange}
						multiple={true}
						renderValue={selected => selected.name}
						variant="outlined">
						{this.menuItems(this.state.categories)}
					</Select>
				</Container>
			</>
		);

	}
}

export default CreateService;