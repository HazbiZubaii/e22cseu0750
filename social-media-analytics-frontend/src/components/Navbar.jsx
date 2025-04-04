import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Social Media Analytics</h1>
      <ul>
        <li><Link to="/">Feed</Link></li>
        <li><Link to="/trending">Trending Posts</Link></li>
        <li><Link to="/top-users">Top Users</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

