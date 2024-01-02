import React from "react";
import "./PetsListNav.css";
import { Link } from "react-router-dom";

export const PetsListNav = ({ cats, dogs }) => {
  return (
    <nav className="pets-nav">
      <ul>
        <li>
          <Link to="/pets/cats">
            <h3>See All Cats ({cats.length})</h3>
          </Link>
        </li>
        <li>
          <Link to="/pets/dogs">
            <h3>See All Dogs ({dogs.length})</h3>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default PetsListNav;
