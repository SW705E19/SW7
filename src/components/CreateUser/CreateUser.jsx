import React, { Component } from "react";
import UserForm from "./UserForm";

export class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languageValues: [],
      subjectOfInterestValues: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <UserForm
        handleChange={this.handleChange}
        languageValues={this.state.languageValues}
        subjectOfInterestValues={this.state.subjectOfInterestValues}
      />
    );
  }
}

export default CreateUser;
