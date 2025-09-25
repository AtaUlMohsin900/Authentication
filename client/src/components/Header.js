import Avatar from "@mui/material/Avatar";

import React from "react";

import "./header.css";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <h1>nissotec</h1>
          <div className="avatar">
            <Avatar style={{ background: "black" }}>K</Avatar>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
