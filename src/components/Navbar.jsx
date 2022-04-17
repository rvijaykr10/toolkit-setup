import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <h2>Redux Toolkit POC</h2>
      </div>
      <div className="navItemContainer">
        <div className="navItem">
          <Link to="/">CRUD</Link>
        </div>
        <div className="navItem">
          <Link to="/jokes">JOKES</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
