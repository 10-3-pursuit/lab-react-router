import React from "react";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";

export const PetsList = ({ pets, type }) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );


  // i feel like i could make a function to set array to a filterd array depending on type instead of having 3 maps in the future
  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {/* All cats section */}
        {type === "cat" && cats.map((cat) => (
          <Pet key={cat.id} kind="cat" pet={cat} />
        ))}

        {/* All dogs section */}
        { type === "dog" && dogs.map((dog) => (
          <Pet key={dog.id} kind="dog" pet={dog} />
        ))}

        {/* Display other pets if type is not a cat or dog */}
        { type !== "cat" && type !== "dog" && pets.map((pet) => (
          <Pet key={pet.id} kind={pet.kind.toLowerCase()} pet={pet} />
        ))}
      </section>
    </section>
  );
};

export default PetsList;
