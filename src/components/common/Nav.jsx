import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header>
      <article>
        <h1>
          <Link to="/">Animal Hospital</Link>
          {/* <a href="/">
            Northwest <span>Animal Hospital</span>
          </a> */}
        </h1>
      </article>
      <aside>
        <ul>
          <li>
            <Link to="/staff">All Staff</Link>
            {/* <a href="/staff">All Staff</a> */}
          </li>
          <li>
            <Link to="/pets/cats">All Pets</Link>
            {/* <a href="/pets/cats">All Pets</a> */}
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
