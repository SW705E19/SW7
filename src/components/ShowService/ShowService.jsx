import React, { Component } from 'react';
import RenderService from '../ShowService/RenderService/RenderService';
import { serviceService } from '../../services/service/service.service';
import { ratingService } from '../../services/rating/rating.service';
import { Redirect } from 'react-router';
import { toast } from 'react-toastify';
import { withTranslation } from 'react-i18next';
import { authenticationService } from '../../services/authentication/authentication.service';

class ShowService extends Component {
	constructor(props) {
		super(props);
		this.state = {
			service: null,
			redirectToTutor: false,
			avgRating: null,
			ratingValue: 0,
			rating: null,
			myRatingValue: 0,
			myRating: null
		};
		this.setRedirect = this.setRedirect.bind(this);
		this.submitRating = this.submitRating.bind(this);
		this.setRatingValue = this.setRatingValue.bind(this);
	}

	setRedirect () {
		this.setState({
			redirectToTutor: true
		});
	}
	setRatingValue(value) {
		this.setState({
			ratingValue: value
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
		Promise.all([serviceService.getDetailedById(this.props.match.params.id), 
			ratingService.getAverageRating(this.props.match.params.id)])
			.then(([data, rating]) => {
				if(rating.avg === null){
					rating.avg = this.props.t('norating');
				}
				else{
					rating.avg = rating.avg.substring(0,4);
				}
				this.setState({
					service: data,
					avgRating: rating
				});
			}).catch(() => {
				toast.error(this.props.t('showservicefail'), {
					position: toast.POSITION.BOTTOM_RIGHT
				});
			});
		const id = authenticationService.getCurrentUserId();
		if (id !== undefined) {
			ratingService.getByUserIdServiceId(id,this.props.match.params.id)
				.then(rating => {
					const value = rating.rating;
					this.setState({
						ratingValue: value
					});
				}).catch(() => {
					toast.error(this.props.t('failgettingyourrating'), {
						position: toast.POSITION.BOTTOM_RIGHT
					});
				});
		}
		
	}

	render() {
		if(this.state.redirectToTutor) {
			return (<Redirect to={'/user/' + this.state.service.tutorInfo.id} />);
		}
		return this.state.service ? 
			<RenderService service={this.state.service} redirectToTutor={this.state.redirectToTutor}
				setRedirect={this.setRedirect} ratingValue={this.state.ratingValue}
				submitRating={this.submitRating} avgRating={this.state.avgRating}
				setRatingValue={this.setRatingValue}  /> :
			null; 
	}
}

export default withTranslation()(ShowService);