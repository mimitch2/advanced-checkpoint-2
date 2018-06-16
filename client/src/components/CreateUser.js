import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";
import {createUser} from "../actions";

class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      gender: "male"
    };
  }

  handleChange = (e) => {
    this.setState({[e.currentTarget.id]: e.currentTarget.value});
  }

  handleSubmit = () => {
    // console.log("submit");
    createUser({
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      gender: this.state.gender,
      ip_address: "100.100.10.10"
    });
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      gender: "male"
    });
    
  }

  render() {
    return (
      <div className="create-user-main">
        {/* <form action=""> */}
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" value={this.state.firstName} onChange={(e) => this.handleChange(e)} />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" value={this.state.lastName} onChange={(e) => this.handleChange(e)} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={this.state.email} onChange={(e) => this.handleChange(e)} />
        <label htmlFor="gender">Gender</label>
        <select id="gender" value={this.state.gender} onChange={(e) => this.handleChange(e)} >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button id="submit" onClick={this.handleSubmit}>Submit</button>
        {/* </form> */}
      </div>
    );
  }
}

CreateUser.propTypes = {
  prop: PropTypes.array,
};

export default CreateUser;
