import React, { Component } from "react";
import "./App.css";
import CreateUser from "./containers/CreateUserContainer";
import ListUsers from "./containers/ListUsersContainer";
import UserDetail from "./containers/UserDetailContainer.js";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
 

  componentDidMount() {
    this.props.loadUsers();

    // setTimeout(() => {
    //   console.log(this.props);
    // }, 2000);
    
    
  }
  
  render() {
    return (
      <BrowserRouter>
    
        <div className="create-user-div">
          <Switch>
            <Route path="/user/:id" component={UserDetail} />
   
         
          </Switch>
          <CreateUser />
          <ListUsers />
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  loadUsers: PropTypes.func,
};

export default (App);



