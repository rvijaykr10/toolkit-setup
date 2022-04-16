import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navItem">
        <Link to="/">CRUD</Link>
      </div>
      <div className="navItem">
        <Link to="/api">API</Link>
      </div>
    </div>
  );
};

export default Navbar;
