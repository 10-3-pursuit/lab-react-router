import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";


function Nav() {
  return (
    <header>
      <article>
        <Link to='/'>
          <h1>
              Northwest <span>Animal Hospital</span>
          </h1>
        </Link>
      </article>
      <aside>
        <ul>
          <li>
          <Link to='/staff'>All Staff</Link>
            {/* <a href="/staff">All Staff</a> */}
          </li>
          <li>
          <Link to='/pets/cats'>All Pets</Link>
            {/* <a href="/pets">All Pets</a> */}
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
