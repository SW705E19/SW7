import React, { Component } from "react";
import UserForm from "./UserForm";
import {
  emailValidation,
  dateOfBirthValidation,
  phoneNumberValidation,
  notEmptyValidation,
  validPassword
} from "../../helpers/validation-functions";
import userService from "../../services/user/user.service";

export class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: { firstName: "", firstNameValid: true },
      lastName: { lastName: "", lastNameValid: true },
      address: { address: "", addressValid: true },
      email: { email: "", emailValid: true },
      phoneNumber: { phonenumber: "", phoneNumberValid: true },
      dateOfBirth: { dateOfBirth: "", dateOfBirthValid: true },
      password: { firstPassword: "", secondPassword: "", passwordValid: true },
      languageValues: [],
      subjectOfInterestValues: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (e.target.name === "firstname") {
      let validation = notEmptyValidation(e.target.value);
      this.setState({
        firstName: {
          firstName: e.target.value,
          firstNameValid: true
        }
      });
    } else if (e.target.name === "email") {
      let validation = emailValidation(e.target.value); 
      this.setState({
        email: {
          email: e.target.value,
          emailValid: true
        }
      });
    } else if (e.target.name === "lastname") {
      let validation = notEmptyValidation(e.target.value);
      this.setState({
        lastName: {
          lastName: e.target.value,
          lastNameValid: true
        }
      });
    } else if (e.target.name === "address") {
      let validation = notEmptyValidation(e.target.value)
      this.setState({
        address: {
          address: e.target.value,
          addressValid: true
        }
      });
    } else if (e.target.name === "phoneNumber") {
      let validation = phoneNumberValidation(e.target.value)
      this.setState({
        phoneNumber: {
          phoneNumber: e.target.value,
          phoneNumberValid: true
        }
      });
    } else if (e.target.name === 'dateOfBirth') {
      let validation = dateOfBirthValidation(e.target.value)
      this.setState({
        dateOfBirth: {
          dateOfBirth: e.target.value,
          dateOfBirthValid: true
        }
      });
    } else if (e.target.name === "firstPassword") {
      this.setState({
        password: {
          firstPassword: e.target.value,
          secondPassword: this.state.password.secondPassword,
          passwordValid: true
        }
      });
    } else if (e.target.name === "secondPassword") {
      this.setState({
        password: {
          firstPassword: this.state.password.firstPassword,
          secondPassword: e.target.value,
          passwordValid: true
        }
      });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  handleSubmit(e) {
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
      // kald apien
    }
  }

  render() {
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

export default CreateUser;
