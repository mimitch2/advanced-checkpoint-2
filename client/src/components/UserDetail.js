import React from "react";
import PropTypes from "prop-types";

const style = {
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  h1: {
    width: "100vw",
    height: "max-content",
    textAlign: "center"
  },
  card: {
    backgroundColor: "grey",
    color: "white",
    width: "250px",
    borderRadius: "8px",
    justifyContent: "center",
    margin: "10px",
    boxShadow: "2px 2px 6px rgba(100,100,100,.4",
    padding: "10px"
  }
};

const UserDetail = (props) => {
  const userId = props.match.params.id;
  const user = props.users.find(u => u.id == userId) || {};
  
  return (
    <div style={style.root}>
      <h1 style={style.h1}>USER DETAIL</h1>
      <div className="users-show-card" style={style.card}>
        <h2 style={{cursor: "pointer", textAlign: "center"}} className="user-detail-name">
          {user.first_name} {user.last_name}
        </h2>
        <p className="user-detail-email">{user.email}</p>
        <p className="user-detail-gender">{user.gender}</p>
        <p className="user-detail-ip">{user.ip_address}</p>
      </div>
    </div>
  );
};

UserDetail.propTypes = {
  users: PropTypes.array,
  match: PropTypes.object
};

export default UserDetail;
