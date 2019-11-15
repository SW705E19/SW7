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
      firstNameValid: false,
      lastNameValid: false,
      addressValid: false,
      emailValid: false,
      phoneNumberValid: false,
      dateOfBirthValid: false,
      languageValues: [],
      subjectOfInterestValues: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur(e) {
    if (e.target.name === "firstname") {
      this.setState({ ["firstNameValid"]: notEmptyValidation(e.target.value) });
    } else if (e.target.name === "email") {
      this.setState({ ["emailValid"]: emailValidation(e.target.value) });
    } else if (e.target.name === "lastname") {
      this.setState({ ["lastNameValid"]: notEmptyValidation(e.target.value) });
    } else if (e.target.name === "address") {
      this.setState({ ["addressValid"]: notEmptyValidation(e.target.value) });
    } else if (e.target.name === "phonenumber") {
      this.setState({
        ["phoneNumberValid"]: phoneNumberValidation(e.target.value)
      });
    } else if (e.target.name === "dateOfBirth") {
      this.setState({
        ["dateOfBirthValid"]: dateOfBirthValidation(e.target.value)
      });
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <UserForm
        firstNameValid={this.state.firstNameValid}
        lastNameValid={this.state.lastNameValid}
        addressValid={this.state.addressValid}
        emailValid={this.state.emailValid}
        phoneNumberValid={this.state.phoneNumberValid}
        dateOfBirthValid={this.state.dateOfBirthValid}
        handleChange={this.handleChange}
        languageValues={this.state.languageValues}
        subjectOfInterestValues={this.state.subjectOfInterestValues}
        handleBlur={this.handleBlur}
      />
    );
  }
}

export default CreateUser;
