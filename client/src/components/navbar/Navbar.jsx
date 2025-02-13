import React from "react";
import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <span>Blogger</span>
      </div>
      <div className="right">
        <HomeOutlinedIcon />
        <div className="user"></div>
      </div>
    </div>
  );
};

export default Navbar;
