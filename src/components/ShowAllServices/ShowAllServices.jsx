import React, { Component } from 'react';
import { serviceService } from '../../services/service/service.service';
import ServiceList from '../../containers/ServiceList/ServiceList';
import { Redirect } from 'react-router';
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
		serviceService.getAll()
			.then( res => {
				this.setState({
					services: res
				});
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

	render(){
		if(this.state.redirect){
			return (<Redirect to={this.state.redirectTo} />);
		}
		
		return this.state.services ? 
			<ServiceList services={this.state.services} onClick={this.redirect} /> :
			null;
	
	}
}

export default withTranslation()(ShowAllServices);
export { ShowAllServices };

