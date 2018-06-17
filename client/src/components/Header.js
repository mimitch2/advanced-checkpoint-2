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
    alignItems: "center",
    justifyContent: "center",
    fontSize: "26px"
  },
  ul: {
    listStyleType: "none",
    display: "flex",
    paddingLeft: "0px"
  },
  link: {
    textDecoration: "none",
    color: "white"
  },
  li: {
    marginRight: "14px"
  },
  liTwo: {
    marginLeft: "14px"
  }
};

const Header = () => {
  return (
    <header className="header" style={style.root}>
      <nav>
        <ul style={style.ul} >
          <Link to={"/"} style={style.link}>
            <li style={style.li}>Users</li>
          </Link>
          <Link to={"/user"} style={style.link}>
            <li style={style.liTwo}>Create User</li>
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
