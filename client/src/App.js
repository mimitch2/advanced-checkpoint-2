import React, { Component } from "react";
import "./App.css";
import CreateUser from "./components/CreateUser";

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {

  }
  
  render() {
    return (
      <div className="create-user-div">
        <CreateUser />
      </div>
    );
  }
}
export default (App);


