import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function NavBar(props) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <i className="fas fa-user"></i> About
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <i className="fas fa-briefcase"></i> Projects
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <i className="fas fa-envelope"></i> Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
