import React from "react";
import "./Nav.css";
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <header>
        <ul>
          <li>
            <Link to="/">
              <h1>Northwest Animal Hospital</h1>
            </Link>
          </li>
          <li>
            <Link to="/staff">
              <h3>All Staff</h3>
            </Link>
          </li>
          <li>
            <Link to="/pets">
              <h3>All Pets</h3>
            </Link>
          </li>
        </ul>
      </header>
    </nav>
  );
};


