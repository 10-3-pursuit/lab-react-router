import React from "react";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";

export const PetsList = ({ pets, specie }) => {
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
        {specie !== "cat" && specie !== "dog" && pets.map((pet) => (
          <Pet key={pet.id} kind={pet.kind} pet={pet} />
        ))}
        {specie === 'cat' && cats.map((cat) => (
          <Pet key={cat.id} kind="Cat" pet={cat} />
        ))}
        {specie === 'dog' &&dogs.map((dog) => (
          <Pet key={dog.id} kind="Dog" pet={dog} />
        ))}
      </section>
    </section>
  );
};

export default PetsList;
