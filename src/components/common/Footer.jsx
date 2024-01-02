import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer>
      <p>Northwest Animal Hospital. 2022.</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
