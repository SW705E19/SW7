import React, { Component } from 'react';
import RenderService from '../ShowService/RenderService/RenderService';
import { serviceService } from '../../services/service/service.service';
import { Redirect } from 'react-router';

class ShowService extends Component {
	constructor(props) {
		super(props);
		this.state = {
			service: {},
			categories: [],
			tutor: {},
			tutorInfo: {},
			redirectToTutor: false
		};
		this.setRedirect = this.setRedirect.bind(this);
	}

	
	setRedirect () {
		this.setState({
			redirectToTutor: true
		});
	}

	componentDidMount() {
		fetch(serviceService.getDetailedById(this.props.match.params.id)
			.then((data) => {
				this.setState({ service: data });
				this.setState({categories: data.categories});
				this.setState({tutor: data.tutorInfo.user});
				this.setState({tutorInfo: data.tutorInfo});
				this.setState({categories: data.categories});
			}))
			.catch(console.log);
	}
	render() {
		if(this.state.redirectToTutor) {
			return (<Redirect to={'/user/' + this.state.tutorInfo.id} />);
		}
		return (<RenderService service={this.state.service} tutor={this.state.tutor} tutorInfo={this.state.tutorInfo} 
			categories={this.state.categories} redirectToTutor={this.state.redirectToTutor} setRedirect={this.setRedirect}/>);
	}
}

export default ShowService;
