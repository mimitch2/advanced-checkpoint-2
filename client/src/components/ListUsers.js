import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const style = {
  root: {
    display: "flex",
  },
  name: {
    width: "max-content",
    cursor: "pointer"
  },
  cancel: {
    marginTop: "22px",
    marginLeft: "6px",
    color: "red", 
    cursor: "pointer"
  }
};

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
          <div key={index} className="users-list-card" style={style.root}>
            <Link to={"/user/" + user.id}> 
              <h3 style={style.name} className="user-name" onClick={(e) => handleShow(e)} 
                id={user.id}>
                {user.first_name} {user.last_name}
              </h3> 
            </Link>
            <i className="fas fa-times" style={style.cancel} 
              onClick={(e) => handleRemove(e)} id={user.id} />
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
