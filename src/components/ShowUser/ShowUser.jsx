import React, { Component } from 'react';
import RenderUser from '../ShowUser/RenderUser/RenderUser';
import { userService } from '../../services/user/user.service';

class ShowUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: []
		};
	}

	componentDidMount() {
		fetch(userService.getById(this.props.match.params.id)
			.then((data) => {
				this.setState({ user: data });
			}))
			.catch(console.log);
	}
	render() {
		return (<RenderUser user={this.state.user} />);
	}
}

export default ShowUser;
