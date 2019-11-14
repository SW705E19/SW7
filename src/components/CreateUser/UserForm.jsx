import React, { Component } from "react";
import CreateUser from "./CreateUser";

export class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  };


  render() {
    return (
      <CreateUser 
        handleChange={this.handleChange} 
      />
    );
  }
}

export default UserForm;
