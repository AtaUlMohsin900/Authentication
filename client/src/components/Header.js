import Avatar from "@mui/material/Avatar";

import React from "react";

import "./header.css";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <h1>HP Cloud</h1>
          <div className="avatar">
            <Avatar style={{ background: "green" }}>H</Avatar>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
