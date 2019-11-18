import React, { Component } from 'react';
import RenderService from '../ShowService/RenderService/RenderService';
import { serviceService } from '../../services/service/service.service';

class ShowService extends Component {
	constructor(props) {
		super(props);
		this.state = {
			service: []
		};
	}

	componentDidMount() {
		fetch(serviceService.getById(this.props.match.params.id)
			.then((data) => {
				this.setState({ service: data });
			}))
			.catch(console.log);
	}
	render() {
		return (<RenderService service={this.state.service} />);
	}
}

export default ShowService;
