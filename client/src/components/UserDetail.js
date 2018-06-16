import React from "react";
import PropTypes from "prop-types";

const UserDetail = (props) => {
  console.log(props);


  const userId = props.match.params.id;
  const user = props.users.find(u => u.id == userId) || {};
  
  return (
    <div className="users-show-card">
      <h3 style={{cursor: "pointer"}} className="user-detail-name">{user.first_name} {user.last_name}</h3>
      <p className="user-detail-email">{user.email}</p>
      <p className="user-detail-gender">{user.gender}</p>
      <p className="user-detail-ip">{user.ip_address}</p>
    </div>
  );
};

UserDetail.propTypes = {
  prop: PropTypes.array,
};

export default UserDetail;
