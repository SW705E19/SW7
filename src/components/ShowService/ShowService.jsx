import React, { Component } from 'react';
import RenderService from '../ShowService/RenderService/RenderService';
import { serviceService } from '../../services/service/service.service';
import { ratingService } from '../../services/rating/rating.service';
import { Redirect } from 'react-router';
import { toast } from 'react-toastify';

class ShowService extends Component {
	constructor(props) {
		super(props);
		this.state = {
			service: null,
			redirectToTutor: false,
			avgRating: null,
		};
		this.setRedirect = this.setRedirect.bind(this);
	}

	
	setRedirect () {
		this.setState({
			redirectToTutor: true
		});
	}

	componentDidMount() {
		Promise.all([serviceService.getDetailedById(this.props.match.params.id), 
			ratingService.getAverageRating(this.props.match.params.id)])
			.then(([data, rating]) => {
				this.setState({
					service: data,
					avgRating: rating
				});
			}).catch(() => {
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
			<RenderService service={this.state.service} redirectToTutor={this.state.redirectToTutor}  avgRating={this.state.avgRating} setRedirect={this.setRedirect}/> :
			null; 
	}
}

export default ShowService;
