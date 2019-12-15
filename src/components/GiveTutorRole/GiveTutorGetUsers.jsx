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
			this.changeRole(users, e);
			userService.editTutorRole(users[e.index].id, users[e.index].roles)
				.then(() => {
					toast.success(this.props.t('saveeditusernotifysuccess'), {
						position: toast.POSITION.BOTTOM_RIGHT
					});
				})
				.catch(() => {
					this.changeRole(users, e);
					toast.error(this.props.t('saveeditusernotifyfail'), {
						position: toast.POSITION.BOTTOM_RIGHT
					});
				});
			return {users};
		});	
	}
	changeRole(users, e) {
		if( !users[e.index].roles.includes('TUTOR') ){
			users[e.index].roles.push('TUTOR');
		}
		else{
			for(let i = 0; i < users[e.index].roles.length; i++){
				if(users[e.index].roles[i] === 'TUTOR'){
					users[e.index].roles.splice(i,1);
				}
			}
		}
	}

	componentDidMount() {
		userService.getAll()
			.then(async (data) => {
				let i = 0;
				data.map(user => {
					user.index = i;
					i++;
				});
				this.setState({	
					users: data
				});
			})
			.catch(() => {
				toast.error(this.props.t('getusersfail'), {
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
