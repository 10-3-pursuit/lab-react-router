import React from "react";
import { Link } from "react-router-dom"; // <Link> components use React Router's internal handling to navigate between pages without a full page refresh, which is more efficient and provides a smoother user experience in a single-page application
import "./PetsListNav.css";

export const PetsListNav = ({ cats, dogs }) => {
  return (
    <nav className="pets-nav">
      <ul>
        <li>
          {/* Use Link instead of a */}
          <Link to="/pets/cats">See All Cats ({cats.length})</Link>
        </li>
        <li>
          {/* Use Link instead of a */}
          <Link to="/pets/dogs">See All Dogs ({dogs.length})</Link>
        </li>
      </ul>
    </nav>
  );
};

export default PetsListNav;