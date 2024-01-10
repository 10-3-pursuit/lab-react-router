import React from "react";
import "./Pet.css";

const iconMap = {
  cat: "🐈",
  dog: "🐕",
};

export const Pet = ({ kind, pet }) => {
  const icon = iconMap[kind.toLowerCase()];
  return (
        <article>
          <h3>
            {icon} {pet.name}
          </h3>
        </article>
  );
};

export default Pet;