import React, { Component } from 'react';
import UserForm from './UserForm';
import {
	emailValidation,
	dateOfBirthValidation,
	phoneNumberValidation,
	notEmptyValidation,
	validPassword
} from '../../helpers/validation-functions';
import { authenticationService } from '../../services/authentication/authentication.service';
import { toast } from 'react-toastify';
import { withTranslation } from 'react-i18next';
import { Redirect } from 'react-router';

export class CreateUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: { firstName: '', firstNameValid: true },
			lastName: { lastName: '', lastNameValid: true },
			address: { address: '', addressValid: true },
			email: { email: '', emailValid: true },
			phoneNumber: { phoneNumber: '', phoneNumberValid: true },
			dateOfBirth: { dateOfBirth: '', dateOfBirthValid: true },
			password: { firstPassword: '', secondPassword: '', passwordValid: true },
			education: '',
			languageValues: [],
			subjectOfInterestValues: [],
			redirect: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		switch(e.target.name){
		case 'firstname':{
			this.setState({
				firstName: {
					firstName: e.target.value,
					firstNameValid: true
				}
			});
			break;
		}
		case 'lastname':{
			this.setState({
				lastName: {
					lastName: e.target.value,
					lastNameValid: true
				}
			});
			break;
		}
		case 'email':{
			this.setState({
				email: {
					email: e.target.value,
					emailValid: true
				}
			});
			break;
		}
		case 'address':{
			this.setState({
				address: {
					address: e.target.value,
					addressValid: true
				}
			});
			break;
		}
		case 'phoneNumber':{
			this.setState({
				phoneNumber: {
					phoneNumber: e.target.value,
					phoneNumberValid: true
				}
			});
			break;
		}
		case 'dateOfBirth':{
			this.setState({
				dateOfBirth: {
					dateOfBirth: e.target.value,
					dateOfBirthValid: true
				}
			});
			break;
		}
		case 'firstPassword':{
			this.setState({
				password: {
					firstPassword: e.target.value,
					secondPassword: this.state.password.secondPassword,
					passwordValid: true
				}
			});
			break;
		}
		case 'secondPassword':{
			this.setState({
				password: {
					firstPassword: this.state.password.firstPassword,
					secondPassword: e.target.value,
					passwordValid: true
				}
			});
			break;
		}
		default:{
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
			password: {
				firstPassword: this.state.password.firstPassword,
				secondPassword: this.state.password.secondPassword,
				passwordValid: validPassword(
					this.state.password.firstPassword,
					this.state.password.secondPassword
				)
			}
		});
		if (
			this.state.firstName.firstNameValid &&
      this.state.lastName.lastNameValid &&
      this.state.phoneNumber.phoneNumberValid &&
      this.state.email.emailValid &&
      this.state.address.addressValid &&
      this.state.dateOfBirth.dateOfBirthValid
		) {
			let user = {firstName : this.state.firstName.firstName,
				lastName : this.state.lastName.lastName,
				phoneNumber : this.state.phoneNumber.phoneNumber,
				email : this.state.email.email,
				address : this.state.address.address,
				dateOfBirth : this.state.dateOfBirth.dateOfBirth,
				education : this.state.education,
				password : this.state.password.firstPassword,
				languages : this.state.languageValues,
				subjectsOfInterest : this.state.subjectOfInterestValues,
				roles : [],
				avatarUrl: ''};
			authenticationService.createUser(user)
				.then(() => {
					toast.success(this.props.t('createUserSuccess'), {
						position: toast.POSITION.BOTTOM_RIGHT
					});
					this.setState({
						redirect: true
					});
				}).catch(() => {
					toast.error(this.props.t('createUserFail'), {
						position: toast.POSITION.BOTTOM_RIGHT
					});
				});
		}
	}

	render() {
		if(this.state.redirect){
			return <Redirect to={'/'}/>;
		}
		return (
			<UserForm
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
				handleSubmit={this.handleSubmit}
			/>
		);
	}
}

export default withTranslation()(CreateUser);
