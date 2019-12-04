import React, { Component } from 'react';
import {serviceService as serviceAPI} from '../../services/service/service.service';
import ServiceList from '../../containers/ServiceList/ServiceList';
import {Redirect} from 'react-router';
import { toast } from 'react-toastify';
import { withTranslation } from 'react-i18next';

class ShowAllServices extends Component {
	constructor(props){
		super(props);
		this.state = {
			services: null,
			redirect: false
		};
		this.redirect = this.redirect.bind(this);
	}

	componentDidMount(){
		serviceAPI.getAll()
			.then(res => this.setState({
				services: res
			}))
			.catch(() => {
				toast.error(this.props.t('getAllServicesFail'), {
					position: toast.POSITION.BOTTOM_RIGHT
				});
			});
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

export default withTranslation()(ShowAllServices);
export { ShowAllServices };

