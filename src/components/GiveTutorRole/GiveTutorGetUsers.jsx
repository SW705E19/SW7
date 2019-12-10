import React, { Component } from 'react';
import { userService } from '../../services/user/user.service';
import RenderService from './GiveTutorRoleForm';
import { toast } from 'react-toastify';
import { withTranslation } from 'react-i18next';

class ShowEditTutorRole extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
		};
	}

	

	componentDidMount() {
		userService.getAll()
			.then(async (data) => {
				this.setState({	
					users: data
				});
			})
			.catch(() => {
				toast.error(this.props.t('showservicefail'), {
					position: toast.POSITION.BOTTOM_RIGHT
				});
			});
	}

	render() {
		return (<RenderService users={this.state.users}/>);
	}
}

export default withTranslation()(ShowEditTutorRole);
