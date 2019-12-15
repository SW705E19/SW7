import React, { Component } from 'react';
import { serviceService } from '../../services/service/service.service';
import ServiceList from '../../containers/ServiceList/ServiceList';
import { Redirect } from 'react-router';
import { toast } from 'react-toastify';
import { withTranslation } from 'react-i18next';
import { Typography, TextField } from '@material-ui/core';

class ShowAllServices extends Component {
	constructor(props){
		super(props);
		const filter = this.props.searchInput ? this.props.searchInput : '';
		this.state = {
			filter: filter,
			filteredServices: null,
			services: null,
			redirect: false
		};
		this.redirect = this.redirect.bind(this);
		this.handleFilterChange = this.handleFilterChange.bind(this);
	}

	componentDidMount(){
		serviceService.getAll()
			.then( res => {
				this.setState({
					services: res,
					filteredServices: res
				});
				if(this.state.filter.length > 0){
					this.handleFilterChange();
				}
			})
			.catch(() => {
				toast.error(this.props.t('getAllServicesFail'), {
					position: toast.POSITION.BOTTOM_RIGHT
				});
				this.setState({
					redirect: true,
					redirectTo: '/'
				});
			});
	}

	redirect(serviceId){
		const redirectTo = '/service/' + serviceId;
		this.setState({
			redirect: true,
			redirectTo: redirectTo
		});
	}

	handleFilterChange(event) {
		const filter = event ? event.target.value : this.state.filter;
		this.setState({ filter: filter} ,() => {
			const lowercasedFilter = this.state.filter.toLowerCase();
			const filteredServices = this.state.services.filter(service => {
				if(service.name.includes(lowercasedFilter)) {
					return true;
				} 
				if (service.description.includes(lowercasedFilter)){
					return true;
				} 
				if(service.categories) {
					if(service.categories.some(category => {
						if(category.name.includes(lowercasedFilter)) {
							return true;
						} 
						if(category.description.includes(lowercasedFilter)){
							return true;
						}
						return false;
					})) {
						return true;
					}
				} 
				if(service.tutorInfo) {
					if(service.tutorInfo.user) {
						if(service.tutorInfo.user.firstName.includes(lowercasedFilter)) {
							return true;
						}
						if (service.tutorInfo.user.lastName.includes(lowercasedFilter)){
							return true;
						}
					}
				}
				return false; 
			});
			this.setState({filteredServices: filteredServices});
		});
	}



	render(){
		if(this.state.redirect){
			return (<Redirect to={this.state.redirectTo} />);
		}
		
		return this.state.services ? 
			<>
				<Typography 
					align="center"
					variant="h2"
				>
					{this.props.t('showAllServicesTitle')}
				</Typography>
				<TextField onChange={this.handleFilterChange} label={this.props.t('searchservices')} variant="outlined" value={this.state.filter} fullWidth/>
				<ServiceList services={this.state.filteredServices} onClick={this.redirect} />
			</>:
			null;
	
	}
}

export default withTranslation()(ShowAllServices);
export { ShowAllServices };

