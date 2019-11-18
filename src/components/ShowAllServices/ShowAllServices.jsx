import {React, Component} from 'react';
import {serviceService as serviceAPI} from '../../services/service/service.service';

class ShowAllServices extends Component {
	constructor(props){
		super(props);
		this.state= {
			services: []
		};
	}

	componentDidMount(){
		serviceAPI.getAll().then(res => console.log(res));
	}

	render(){
		return (
			<div></div>
		);
	}
}

export default ShowAllServices;
