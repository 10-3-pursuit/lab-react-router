import React from "react";
import { Route, Routes } from "react-router-dom"; // import Route and Routes
import "./Pet.css";

const iconMap = {
  cat: "🐈",
  dog: "🐕",
};

export const Pet = ({ kind, pet }) => {
  const icon = iconMap[kind];
  return (
    <Routes>
      {/* ternary for routes if kind = cat then path is pets/cats if kind = dog then path is pets/dogs  */}
      <Route path="/pets" element={
        <article key={pet.id}>
          <h3>
            {icon} {pet.name}
          </h3>
        </article>} />
      </Routes>
  );
};

export default Pet;
