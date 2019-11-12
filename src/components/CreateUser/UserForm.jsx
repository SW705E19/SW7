import React, { Component } from "react";
import CreateUser from "./CreateUser";

export class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      education: "",
      dateOfBirth: "",
      subjectOfInterst: "",
      languages: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      education,
      dateOfBirth,
      subjectOfInterst,
      languages
    } = this.state;
    const values = {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      education,
      dateOfBirth,
      subjectOfInterst,
      languages
    };
    return (
      <CreateUser handleChange={() => this.handleChange} values={values} />
    );
  }
}

export default UserForm;
