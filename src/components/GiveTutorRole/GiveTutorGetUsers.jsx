import React, { Component } from 'react';
import { userService } from '../../services/user/user.service';
import RenderService from './GiveTutorRoleForm';
import { toast } from 'react-toastify';

class ShowEditTutorRole extends Component {
	constructor(props) {
		super(props);
		this.state = {
			service: null,
		};
	
	}
	componentDidMount() {
		userService.getAll()
			.then(data => {
				console.log(data);
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
		return this.state.service ? 
		<RenderService service={this.state.service}/> :
			null; 
	}
}

export default ShowEditTutorRole;
