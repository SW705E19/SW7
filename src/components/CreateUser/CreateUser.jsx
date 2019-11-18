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
      firstName: { firstName: "", firstNameValid: false, flag: false },
      lastName: { lastName: "", lastNameValid: false, flag: false },
      address: { address: "", addressValid: false, flag: false },
      email: { email: "", emailValid: false, flag: false },
      phoneNumber: { phonenumber: "", phoneNumberValid: false, flag: false },
      dateOfBirth: { dateOfBirth: "", dateOfBirthValid: false, flag: false },
      languageValues: [],
      subjectOfInterestValues: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur(e) {
    //Update Flag here
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
