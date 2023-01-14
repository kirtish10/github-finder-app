import React from "react";
import { FaGithub } from "react-icons/fa";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { PropTypes } from "prop-types";

function Navbar({ title }) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="text-3xl inline pr-2" />
         
            <Link to='/' className="text-lg font-bold align-middle">{title}</Link>
          
        </div>
        <div className="px-2 flex-1">
          <div className="flex justify-end">
              <Link to='/' className="btn btn-ghost btn-sm rounded-btn">Home</Link>
              <Link to='/about' className="btn btn-ghost btn-sm rounded-btn">About</Link>
          </div>
        </div>
      </div>
     
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};

export default Navbar;
