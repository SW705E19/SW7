import React, { Component } from 'react';
import RenderUser from '../ShowUser/RenderUser/RenderUser';
import { userService } from '../../services/user/user.service';
import { authenticationService } from '../../services/authentication/authentication.service';
import { toast } from 'react-toastify';
import { withTranslation } from 'react-i18next';

class ShowUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null
		};
	}

	componentDidMount() {
		let fetchedUser = null;
		const id = this.props.match.params.id ? this.props.match.params.id : authenticationService.getCurrentUserId();
		userService.getById(id)
			.then(async (data) => {
				fetchedUser = data;
				if(data.roles.includes('TUTOR')) {
					await userService.getTutorInfoByUserId(id).then(tutorInfo => {
						fetchedUser.tutorInfo = tutorInfo;
					}).catch(() => {
						// If the tutor has no tutorinfo created we do nothing
					});
				}
				this.setState({ user: fetchedUser });
			})
			.catch(() => {
				toast.error(this.props.t('showuserfail'), {
					position: toast.POSITION.BOTTOM_RIGHT
				});
			});
	}

	render() {
		return this.state.user ?  <RenderUser user={this.state.user} /> : null;
	}
}

export default withTranslation()(ShowUser);
