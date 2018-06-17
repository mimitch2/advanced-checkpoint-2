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
    backgroundColor: "#4e4e4e",
    color: "white",
    width: "250px",
    borderRadius: "8px",
    justifyContent: "center",
    margin: "10px",
    boxShadow: "2px 2px 6px rgba(100,100,100,.4",
    padding: "10px"
  },
  key: {
    fontSize: "20px",
    fontWeight: "bold"
  },
  edit: {
    fontSize: "26px",
    marginLeft: "16px",
    color: "#49ce49", 
    cursor: "pointer"
  }
};

const handleEdit = (e) => {
  console.log(e.target.id);
  
  // props.deleteUser(e.target.id);
};

const UserDetail = (props) => {
  const userId = props.match.params.id;
  const user = props.users.find(u => u.id == userId) || {};
  
  return (
    <div style={style.root}>
      <h1 style={style.h1}>USER DETAIL</h1>

      <div className="users-show-card" style={style.card}>
        <h2 style={{textAlign: "center"}} className="user-detail-name">
          {user.first_name} {user.last_name} 
          <i className="fas fa-edit" style={style.edit} 
            onClick={(e) => handleEdit(e)} id={user.id} />
        </h2>
        
        <p className="user-detail-email"> <span style={style.key}>email:&nbsp;&nbsp;</span>{user.email}</p>
        <p className="user-detail-gender"><span style={style.key}>gender:&nbsp;&nbsp;</span> {user.gender}</p>
        <p className="user-detail-ip"><span style={style.key}>ip address:&nbsp;&nbsp;</span>{user.ip_address}</p>
      </div>
    </div>
  );
};

UserDetail.propTypes = {
  users: PropTypes.array,
  match: PropTypes.object
};

export default UserDetail;
