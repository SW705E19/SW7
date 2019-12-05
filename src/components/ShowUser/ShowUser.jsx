import React, { Component } from 'react';
import RenderUser from '../ShowUser/RenderUser/RenderUser';
import { userService } from '../../services/user/user.service';
import { toast } from 'react-toastify';

class ShowUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: []
		};
	}

	componentDidMount() {
		let fetchedUser = null;
		userService.getById(this.props.match.params.id)
			.then(async (data) => {
				fetchedUser = data;
				if(data.roles.includes('TUTOR')) {
					await userService.getTutorInfoByUserId(this.props.match.params.id).then(tutorInfo => {
						fetchedUser.tutorInfo = tutorInfo;
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
		return (<RenderUser user={this.state.user} />);
	}
}

export default ShowUser;
