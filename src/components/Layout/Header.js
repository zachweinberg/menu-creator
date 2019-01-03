import React from "react";

const Header = props => (
  <nav className="navbar navbar-expand-sm navbar-light bg-light shadow-sm mb-5">
    <div className="container">
      <a href="/">
        <img
          src={require("../../images/logo.png")}
          alt="TapFood Logo"
          style={{ width: "50px", height: "50px" }}
        />
      </a>
      <span>The Menu Creator</span>
    </div>
  </nav>
);

export default Header;
