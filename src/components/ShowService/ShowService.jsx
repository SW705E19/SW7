import React, { Component } from 'react';
import RenderService from '../ShowService/RenderService/RenderService';

class ShowService extends Component {
	constructor(props) {
		super(props);
		this.state = {
			service: []
		};
	}

	componentDidMount() {
		fetch(`http://${process.env.REACT_APP_API_URI}:${process.env.REACT_APP_API_PORT}/api/services/${this.props.match.params.id}`)
			.then(res => res.json())
			.then((data) => {
				this.setState({ service: data });
			})
			.catch(console.log);
	}
	render() {
		return (<RenderService service={this.state.service} />);
	}
}

export default ShowService;
