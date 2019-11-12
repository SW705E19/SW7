import React, { Component } from 'react';
import RenderUser from '../ShowUser/RenderUser/RenderUser';

class ShowUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: []
		};
	}

	componentDidMount() {
		fetch(`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/users/${this.props.match.params.id}`)
			.then(res => res.json())
			.then((data) => {
				this.setState({ user: data });
			})
			.catch(console.log);
	}
	render() {
		return (<RenderUser user={this.state.user} />);
	}
}

export default ShowUser;
