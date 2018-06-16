import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";




const ListUsers = (props) => {
  
  const handleRemove = (e) => {
    props.deleteUser(e.target.id);
  };
  
  const handleShow = (e) => {
    props.showUser(e.target.id);
  };
  
  return (
    <div>
      {props.users.map((user, index) => {
        return (
          <div key={index} className="users-list-card">
            <Link to={"/user/" + user.id}> <h3 style={{cursor: "pointer"}} className="user-name" onClick={(e) => handleShow(e)} id={user.id}>{user.first_name} {user.last_name} <i className="fas fa-times" style={{color: "red", cursor: "pointer"}} onClick={(e) => handleRemove(e)} id={user.id} /></h3> </Link>
            
            {/* <p className="user-email">{user.email}</p>
            <p className="user-gender">{user.gender}</p>
            <p className="user-ip">{user.ip_address}</p> */}
          </div>
        );
      })}
    </div>
  );
};

ListUsers.propTypes = {
  users: PropTypes.array,
};

export default ListUsers;
