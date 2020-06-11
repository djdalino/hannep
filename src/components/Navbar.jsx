import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = {
    isDark: false,
  };
  render() {
    return (
      <nav>
        <div className="navbar">
          <div className="">Logo</div>
          <div className="navbar-menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
