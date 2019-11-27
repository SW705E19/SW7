import React, { Component } from 'react';
import {serviceService as serviceAPI} from '../../services/service/service.service';
import ServiceList from '../../containers/ServiceList/ServiceList';
import {Redirect} from 'react-router';

class ShowAllServices extends Component {
	constructor(props){
		super(props);
		this.state = {
			services: [],
			redirect: false
		};
		this.redirect = this.redirect.bind(this);
	}

	componentDidMount(){
		serviceAPI.getAll()
			.then(res => this.setState({
				services: res
			}))
			.catch(error => console.log(error));
		

	}
	getPicture(){
		serviceAPI.getRandomImage()
			.then(res => {
				this.setState({
					image: res.url
				});
			})
			.catch(err => console.log(err));
	}
	redirect(serviceId){
		this.setState({
			redirect: true,
			redirectTo: serviceId
		});
	}

	render(){
		if(this.state.redirect){
			return (<Redirect to={`/service/${this.state.redirectTo}`} />);
		}
		
		return this.state.services ? 
			<ServiceList services={this.state.services} onClick={this.redirect} servicesPerLine={4} /> :
			null;
	
	}
}

export default ShowAllServices;
