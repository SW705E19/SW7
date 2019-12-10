import React, { Component } from 'react';
import RenderService from '../ShowService/RenderService/RenderService';
import { serviceService } from '../../services/service/service.service';
import { Redirect } from 'react-router';
import { toast } from 'react-toastify';
import { withTranslation } from 'react-i18next';
import { ratingService } from '../../services/rating/rating.service';
import { authenticationService } from '../../services/authentication/authentication.service';

class ShowService extends Component {
	constructor(props) {
		super(props);
		this.state = {
			service: null,
			redirectToTutor: false,
			ratingValue: 0,
			rating: null
		};
		this.setRedirect = this.setRedirect.bind(this);
		this.submitRating = this.submitRating.bind(this);
	}
	
	setRedirect () {
		this.setState({
			redirectToTutor: true
		});
	}


	submitRating(ratingValue) {
		this.setState({
			rating: {
				rating: ratingValue,
				user: {
					id: authenticationService.getCurrentUserId()
				},
				service: {
					id: this.props.match.params.id
				}
			}
		}, () => ratingService.create(this.state.rating).then(
			toast.success(this.props.t('ratingsubmitted'), {
				position: toast.POSITION.BOTTOM_RIGHT
			}
			)));
	}

	componentDidMount() {
		serviceService.getDetailedById(this.props.match.params.id)
			.then((data) => {
				this.setState({ 
					service: data
				});
			})
			.catch(() => {
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
				setRedirect={this.setRedirect} ratingValue={this.ratingValue}
				submitRating={this.submitRating}/> :
			null; 
	}
}

export default withTranslation()(ShowService);
