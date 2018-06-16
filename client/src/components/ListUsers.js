import React from "react";
import PropTypes from "prop-types";





const ListUsers = (props) => {
  const handleRemove = (e) => {
    props.deleteUser(e.target.id);
    console.log(e.target.id);
  
  };
  console.log(props);
  
  return (
    <div>
      {props.users.map((user, index) => {
        return (
          <div key={index} className="users-list-card">
            <h3 className="user-name">{user.first_name} {user.last_name} <i className="fas fa-times" style={{color: "red", cursor: "pointer"}} onClick={(e) => handleRemove(e)} id={user.id} /></h3>
            <p className="user-email">{user.email}</p>
            <p className="user-gender">{user.gender}</p>
            <p className="user-ip">{user.ip_address}</p>
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
