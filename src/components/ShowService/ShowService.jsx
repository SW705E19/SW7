import React, { Component } from 'react';
import RenderService from '../ShowService/RenderService/RenderService';
import { serviceService } from '../../services/service/service.service';
import { Redirect } from 'react-router';
import { toast } from 'react-toastify';
import { withTranslation } from 'react-i18next';

class ShowService extends Component {
	constructor(props) {
		super(props);
		this.state = {
			service: null,
			redirectToTutor: false,
			ratingValue: 0
		};
		this.setRedirect = this.setRedirect.bind(this);
		this.updateRating = this.updateRating.bind(this);
		this.submitRating = this.submitRating.bind(this);
	}

	
	setRedirect () {
		this.setState({
			redirectToTutor: true
		});
	}

	updateRating(newValue) {
		this.setState({
			ratingValue: newValue
		});
	}

	submitRating() {

	}

	componentDidMount() {
		serviceService.getDetailedById(this.props.match.params.id)
			.then((data) => {
				this.setState({ 
					service: data
				});
			})
			.catch(error => {
				console.log(error);
				toast.error(this.props.t('showservicefail'), {
					position: toast.POSITION.BOTTOM_RIGHT
				});
			});
	}

	render() {
		if(this.state.redirectToTutor) {
			return (<Redirect to={'/user/' + this.state.service.tutorInfo.id} />);
		}
		return this.state.service ? 
			<RenderService service={this.state.service} redirectToTutor={this.state.redirectToTutor}
				setRedirect={this.setRedirect} ratingValue={this.ratingValue} updateRating={this.updateRating}
				submitRating={this.submitRating}/> :
			null; 
	}
}

export default withTranslation() (ShowService);
