import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";
import { Link } from "react-router-dom";

class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      gender: "Male",
      properLink: "/new_user"
    };
  }


  handleChange = (e) => {
    this.setState({[e.currentTarget.id]: e.currentTarget.value});
  }

  handleSubmit = () => {
    if (this.state.firstName && this.state.lastName &&
    this.state.email) {
      this.setState({properLink: "/"});
      setTimeout(() => {
        const newId = this.props.users[this.props.users.length - 1].id;
        this.props.createUser({
          id: Number(newId) + 1,
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
          gender: "Male",
        });
      }, 300);
    
    } else {
      alert("Please fill in all fields before submitting");
    }
  }

  render() {
    // console.log(this.props.users);
    
    return (
      <div className="create-user">
        <div className="heading-div">
          <h1 className="h2">CREATE USER</h1>
        </div>
        <div className="create-user-main">
          {/* <form action=""> */}
        
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" value={this.state.firstName} 
            onChange={(e) => this.handleChange(e)} />
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" value={this.state.lastName} 
            onChange={(e) => this.handleChange(e)} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={this.state.email} 
            onChange={(e) => this.handleChange(e)} />
          <label htmlFor="gender">Gender</label>
          <select id="gender" value={this.state.gender} onChange={(e) => this.handleChange(e)} >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <Link to={"/"}> 
            <button id="submit" onClick={this.handleSubmit}>Submit</button>
          </Link>
          {/* </form> */}
        </div>
      </div>
    );
  }
}

CreateUser.propTypes = {
  users: PropTypes.array,
  createUser: PropTypes.func
};

export default CreateUser;
