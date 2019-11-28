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
		userService.getById(this.props.match.params.id)
			.then((data) => {
				this.setState({ user: data });
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
