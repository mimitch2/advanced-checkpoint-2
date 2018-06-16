import React from "react";
import PropTypes from "prop-types";

const ListUsers = (props) => {
  return (
    <div>{props.users.map((user) => {
        return <li>test</li>
    });
    }

        
        </div>
  );
};

ListUsers.propTypes = {
  prop: PropTypes.array,
};

export default ListUsers;
