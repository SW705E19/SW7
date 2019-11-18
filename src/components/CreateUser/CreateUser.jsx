import React, { Component } from "react";
import UserForm from "./UserForm";
import {
  emailValidation,
  dateOfBirthValidation,
  phoneNumberValidation,
  notEmptyValidation
} from "../../helpers/validation-functions";

export class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: { firstName: "", firstNameValid: true, flag: false },
      lastName: { lastName: "", lastNameValid: true, flag: false },
      address: { address: "", addressValid: true, flag: false },
      email: { email: "", emailValid: true, flag: false },
      phoneNumber: { phonenumber: "", phoneNumberValid: true, flag: false },
      dateOfBirth: { dateOfBirth: "", dateOfBirthValid: true, flag: false },
      languageValues: [],
      subjectOfInterestValues: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur(e) {
    if (e.target.name === "firstname") {
      this.setState({
        firstName: {
          firstName: e.target.value,
          firstNameValid: notEmptyValidation(e.target.value),
          flag: true
        }
      });
    } else if (e.target.name === "email") {
      this.setState({
        email: {
          email: e.target.value,
          emailValid: emailValidation(e.target.value),
          flag: true
        }
      });
    } else if (e.target.name === "lastname") {
      this.setState({
        lastName: {
          lastName: e.target.value,
          lastNameValid: notEmptyValidation(e.target.value),
          flag: true
        }
      });
    } else if (e.target.name === "address") {
      this.setState({
        address: {
          address: e.target.value,
          addressValid: notEmptyValidation(e.target.value),
          flag: true
        }
      });
    } else if (e.target.name === "phoneNumber") {
      this.setState({
        phoneNumber: {
          phoneNumber: e.target.value,
          phoneNumberValid: phoneNumberValidation(e.target.value),
          flag: true
        }
      });
    } else if (e.target.name === "dateOfBirth") {
      this.setState({
        dateOfBirth: {
          dateOfBirth: e.target.value,
          dateOfBirthValid: dateOfBirthValidation(e.target.value),
          flag: true
        }
      });
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
        subjectOfInterestValues={this.state.subjectOfInterestValues}
        handleBlur={this.handleBlur}
      />
    );
  }
}

export default CreateUser;
