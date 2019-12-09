import React, { Component } from 'react';
import EditUserForm from './EditUserForm';
import {
	emailValidation,
	dateOfBirthValidation,
	phoneNumberValidation,
	notEmptyValidation
} from '../../helpers/validation-functions';
import { userService } from '../../services/user/user.service';
import { toast } from 'react-toastify';
import { withTranslation } from 'react-i18next';
import { Redirect } from 'react-router';

export class EditUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: { firstName: '', firstNameValid: true },
			lastName: { lastName: '', lastNameValid: true },
			address: { address: '', addressValid: true },
			email: { email: '', emailValid: true },
			phoneNumber: { phoneNumber: '', phoneNumberValid: true },
			dateOfBirth: { dateOfBirth: '', dateOfBirthValid: true },
			education: '',
			languageValues: null,
			subjectOfInterestValues: null,
			delete: false,
			deleteDialogOpen: false,
			roles: [],
			avatarUrl: '',
			redirectToUser: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleCancelDelete = this.handleCancelDelete.bind(this);
		this.handleDeleteButton = this.handleDeleteButton.bind(this);
	}

	componentDidMount() {
		userService
			.getOwnUser()
			.then(user => {
				let dateOfBirth = user.dateOfBirth.substring(0, 10);
				dateOfBirth = dateOfBirth.split('-');
				dateOfBirth =
          dateOfBirth[0] + '-' + dateOfBirth[1] + '-' + dateOfBirth[2];
				this.setState({
					firstName: {
						firstName: user.firstName,
						firstNameValid: true
					},
					lastName: {
						lastName: user.lastName,
						lastNameValid: true
					},
					address: {
						address: user.address,
						addressValid: true
					},
					email: {
						email: user.email,
						emailValid: true
					},
					phoneNumber: {
						phoneNumber: user.phoneNumber,
						phoneNumberValid: true
					},
					dateOfBirth: {
						dateOfBirth: dateOfBirth,
						dateOfBirthValid: true
					},
					education: user.education,
					languageValues: user.languages,
					subjectOfInterestValues: user.subjectsOfInterest,
					roles: user.roles,
					avatarUrl: user.avatarUrl,
					id: user.id
				});
			})
			.catch(() => {
				toast.error(this.props.t('showuserfail'), {
					position: toast.POSITION.BOTTOM_RIGHT
				});
			});
	}

	handleDeleteButton() {
		this.setState({
			deleteDialogOpen: true
		});
	}

	handleCancelDelete() {
		this.setState({
			deleteDialogOpen: false
		});
	}

	handleDelete() {
		userService.deleteUser(this.props.match.params.id);
		// TODO: Redirect til landingpage
	}

	handleChange(e) {
		switch (e.target.name) {
		case 'firstname': {
			this.setState({
				firstName: {
					firstName: e.target.value,
					firstNameValid: true
				}
			});
			break;
		}
		case 'lastname': {
			this.setState({
				lastName: {
					lastName: e.target.value,
					lastNameValid: true
				}
			});
			break;
		}
		case 'email': {
			this.setState({
				email: {
					email: e.target.value,
					emailValid: true
				}
			});
			break;
		}
		case 'address': {
			this.setState({
				address: {
					address: e.target.value,
					addressValid: true
				}
			});
			break;
		}
		case 'phoneNumber': {
			this.setState({
				phoneNumber: {
					phoneNumber: e.target.value,
					phoneNumberValid: true
				}
			});
			break;
		}
		case 'dateOfBirth': {
			this.setState({
				dateOfBirth: {
					dateOfBirth: e.target.value,
					dateOfBirthValid: true
				}
			});
			break;
		}
		default: {
			this.setState({ [e.target.name]: e.target.value });
		}
		}
	}

	handleSubmit() {
		this.setState({
			firstName: {
				firstName: this.state.firstName.firstName,
				firstNameValid: notEmptyValidation(this.state.firstName.firstName)
			},
			lastName: {
				lastName: this.state.lastName.lastName,
				lastNameValid: notEmptyValidation(this.state.lastName.lastName)
			},
			email: {
				email: this.state.email.email,
				emailValid: emailValidation(this.state.email.email)
			},
			address: {
				address: this.state.address.address,
				addressValid: notEmptyValidation(this.state.address.address)
			},
			phoneNumber: {
				phoneNumber: this.state.phoneNumber.phoneNumber,
				phoneNumberValid: phoneNumberValidation(
					this.state.phoneNumber.phoneNumber
				)
			},
			dateOfBirth: {
				dateOfBirth: this.state.dateOfBirth.dateOfBirth,
				dateOfBirthValid: dateOfBirthValidation(
					this.state.dateOfBirth.dateOfBirth
				)
			},
			redirectToUser: true
		});

		if (
			this.state.firstName.firstNameValid &&
      this.state.lastName.lastNameValid &&
      this.state.phoneNumber.phoneNumberValid &&
      this.state.email.emailValid &&
      this.state.address.addressValid &&
      this.state.dateOfBirth.dateOfBirthValid
		) {
			let user = {
				firstName: this.state.firstName.firstName,
				lastName: this.state.lastName.lastName,
				phoneNumber: this.state.phoneNumber.phoneNumber,
				email: this.state.email.email,
				address: this.state.address.address,
				dateOfBirth: this.state.dateOfBirth.dateOfBirth,
				education: this.state.education,
				languages: this.state.languageValues,
				subjectsOfInterest: this.state.subjectOfInterestValues,
				roles: this.state.roles,
				avatarUrl: this.state.avatarUrl
			};
			userService
				.editUser(this.props.match.params.id, user)
				.then(() => {
					toast.success(this.props.t('saveeditusernotifysuccess'), {
						position: toast.POSITION.BOTTOM_RIGHT
					});
				})
				.catch(() => {
					toast.error(this.props.t('saveeditusernotifyfail'), {
						position: toast.POSITION.BOTTOM_RIGHT
					});
				});
		}
	}

	render() {
		if (this.state.redirectToUser) {
			return <Redirect to={'/user/' + this.props.match.params.id} />;
		}
		return this.state.languageValues || this.state.subjectOfInterestValues ? (
			<EditUserForm
				firstName={this.state.firstName}
				lastName={this.state.lastName}
				address={this.state.address}
				email={this.state.email}
				phoneNumber={this.state.phoneNumber}
				dateOfBirth={this.state.dateOfBirth}
				handleChange={this.handleChange}
				languageValues={this.state.languageValues}
				password={this.state.password}
				subjectOfInterestValues={this.state.subjectOfInterestValues}
				deleteDialogOpen={this.state.deleteDialogOpen}
				handleDeleteButton={this.handleDeleteButton}
				handleSubmit={this.handleSubmit}
				handleDelete={this.handleDelete}
				handleCancelDelete={this.handleCancelDelete}
			/>
		) : null;
	}
}

export default withTranslation()(EditUser);
