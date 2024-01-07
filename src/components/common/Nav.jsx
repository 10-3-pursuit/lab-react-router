import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./Nav.css";

function Nav() {
  return (
    <header>
      <article>
        <h1>
          {/* Replace <a> with <Link> */}
          <Link to="/">
            Northwest <span>Animal Hospital</span>
          </Link>
        </h1>
      </article>
      <aside>
        <ul>
          <li>
            {/* Replace <a> with <Link> */}
            <Link to="/staff">All Staff</Link>
          </li>
          <li>
            {/* Replace <a> with <Link> */}
            <Link to="/pets">All Pets</Link>
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
