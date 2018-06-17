import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const style = {
  root: {
    width: "100vw",
    height: "60px",
    backgroundColor: "grey",
    color: "white",
    display: "flex",
    alignItems: "center"
  },
  ul: {
    listStyleType: "none",
    display: "flex"
  },
  li: {
    marginLeft: "10px"
  }
};

const Header = () => {
  return (
    <header className="header" style={style.root}>
      <nav>
        <ul style={style.ul}>
          <Link to={"/"}>
            <li style={style.li}>Users</li>
          </Link>
          <Link to={"/user"}>
            <li style={style.li}>Create User</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  prop: PropTypes.array,
};

export default Header;
