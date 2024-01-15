import React from "react";
import { useParams } from "react-router-dom";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";

export const PetsList = ({ pets }) => {
  let {kind} = useParams()
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
      {kind === "cats" &&
          cats.map((cat) => <Pet key={cat.id} kind="cat" pet={cat} />)}
        {kind === "dogs" &&
          dogs.map((dog) => <Pet key={dog.id} kind="dog" pet={dog} />)}
          {kind !== "dogs" && kind !== "cats" &&
          pets.map((pet) => <Pet key={pet.id} kind={pet.kind.toLowerCase()} pet={pet} />)}

      </section>
    </section>
  );
};

export default PetsList;
