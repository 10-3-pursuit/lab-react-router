import React, { useEffect } from "react";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { useNavigate, useParams } from "react-router-dom";

export const PetsList = ({ pets }) => {
  const { kind } = useParams();
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (kind === undefined) {
      navigate("/pets/cats");
    }
  }, [kind]);

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {kind === "dogs" &&
          dogs.map((dog) => <Pet key={dog.id} kind="dog" pet={dog} />)}
        {kind === "cats" &&
          cats.map((cat) => <Pet key={cat.id} kind="cat" pet={cat} />)}
      </section>
    </section>
  );
};

export default PetsList;
