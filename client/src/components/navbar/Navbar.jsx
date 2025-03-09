import React from "react";
import { Link } from "react-router";

import HomeIcon from "@mui/icons-material/Home";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Social App</span>
        </Link>
        <HomeIcon className="icon" />
      </div>
      <div className="right">
        <PowerSettingsNewIcon className="off" />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="profile"
            className="topbarImg"
          />
          <span>Jane Doe</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
