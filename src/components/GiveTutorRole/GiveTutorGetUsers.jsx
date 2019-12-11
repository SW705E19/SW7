import React, { Component } from 'react';
import { userService } from '../../services/user/user.service';
import RenderTutors from './GiveTutorRoleForm';
import { toast } from 'react-toastify';
import { withTranslation } from 'react-i18next';

class ShowEditTutorRole extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
		};
		this.handleOnChange = this.handleOnChange.bind(this);
	}

	handleOnChange(e) {
		this.setState(state => {
			let users = state.users;
			users[e.index].selected = !users[e.index].selected;

			let roles = users[e.index].roles;
			if( users[e.index].selected ){
				roles.push('TUTOR');
			}
			else{
				for(let i = 0; i < roles.length; i++){
					if(roles[i] === 'TUTOR'){
						roles.splice(i,1);
					}
				}
			}
			users[e.index].roles = roles;
			userService.editTutorRole(users[e.index].id, roles);
			return {users,};
		});
		
	}

	componentDidMount() {
		userService.getAll()
			.then(async (data) => {
				let i = 0;
				data.map(user => {
					user.index = i;
					i++;
					user.roles.includes('TUTOR') ? user.selected = true : user.selected = false;
				});
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
		return (
			<RenderTutors 
				users={this.state.users}
				handleOnChange={this.handleOnChange}
			/>);
	}
}

export default withTranslation()(ShowEditTutorRole);
