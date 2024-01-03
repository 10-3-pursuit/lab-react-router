import React from "react";
import "./Pet.css";
import { useParams, useNavigate} from "react-router-dom";

const iconMap = {
  cat: "🐈",
  dog: "🐕",
};

export const Pet = ({ kind, pet }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const icon = iconMap[kind];

  const handleClick = () => {
    alert(`Clicked on ${pet.name}`);
    navigate("/pets/${kind}s"); 
  };

  return (
    <article key={pet.id}>
    
      <h3>
        {icon} {pet.name}
      </h3>
      <button onClick={handleClick}></button>
    </article>
  );
};

export default Pet;
