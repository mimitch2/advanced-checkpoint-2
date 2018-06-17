import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";
import { Link } from "react-router-dom";

class UpdateUser extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      gender: "Male"
    };
  }

  handleChange = (e) => {
    this.setState({[e.currentTarget.id]: e.currentTarget.value});
  }

  handleSubmit = () => {
    const newId = this.props.users[this.props.users.length - 1].id;

    this.props.updateUser({
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
      gender: "Male"
    });
    
  }

  render() {
    // console.log(this.props.users);
    
    return (
      <div className="create-user">
        <div className="heading-div">
          <h2 className="h2">UPDATE USER</h2>
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

UpdateUser.propTypes = {
  users: PropTypes.array,
  createUser: PropTypes.func
};

export default UpdateUser;
