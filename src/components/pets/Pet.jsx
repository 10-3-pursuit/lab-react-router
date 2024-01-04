import React from "react";
import "./Pet.css";
import { useNavigate} from "react-router-dom";

const iconMap = {
  cat: "🐈",
  dog: "🐕",
};

export const Pet = ({ kind, pet }) => {
  const navigate = useNavigate();
  const icon = iconMap[kind];

  const handleClick = () => {
    alert(`Clicked on ${pet.name}`);
    navigate("/"); 
  };
  return (
    <article key={pet.id} onClick={handleClick}>
      <h3>
        {icon} {pet.name}
      </h3>
    </article>
  );
};

export default Pet;
