import React, { Component } from 'react';
import {serviceService as serviceAPI} from '../../services/service/service.service';
import RenderShowAllServices from './RenderAllServices/RenderShowAllServices';

class ShowAllServices extends Component {
	constructor(props){
		super(props);
		this.state= {
			services: []
		};
	}

	componentDidMount(){
		serviceAPI.getAll()
			.then(res => this.setState({ services: res}))
			.catch(error => console.log(error));
	}

	render(){
		return <RenderShowAllServices services={this.state.services} />;
	}
}

export default ShowAllServices;
