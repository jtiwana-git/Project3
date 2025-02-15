import React from "react";
import "./navbar.scss";
import John from "../../sample/johnDoePic.png";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Blogger</span>
        </Link>
      </div>
      <div className="container2">
        <Link to="/" style={{ textDecoration: "none" }}></Link>
        <div className="user">
          <img src={John} alt="" />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
