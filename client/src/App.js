import React, { Component } from "react";
import "./App.css";
import CreateUser from "./containers/CreateUserContainer";
import ListUsers from "./containers/ListUsersContainer";


class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.loadUsers();

    // setTimeout(() => {
    //   console.log(this.props);
    // }, 2000);
    
    
  }
  
  render() {
    return (
      <div className="create-user-div">
        <CreateUser />
        <ListUsers />

      </div>
    );
  }
}
export default (App);


