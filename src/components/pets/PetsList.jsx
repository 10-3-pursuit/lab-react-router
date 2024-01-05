import React from "react";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { useParams } from "react-router-dom";

export const PetsList = ({ pets }) => {
  const { kind } = useParams(); //accesses kind from URL to separate cats vs dogs
  const [cats, dogs] = pets.reduce( // reduce method on the pets array to categorize the pets into two groups: cats and dogs. The reduce method accumulates the pets into two separate arrays based on their kind property
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1; // If kind is "Cat", the pet is added to the first array (cats), otherwise to the second array 
      acc[position].push(pet); // position variable is used to determine which sub-array to push the pet into
      return acc;
    },
    [[], []]
  );

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {/* maps over the cats and dogs arrays to render individual pets: for each cat and dog, it renders a <Pet> component, passing a unique key (using the pet's id), the kind of the pet (either "cat" or "dog"), and the pet object itself */}
        
        {/* All cats section */}
        {/* add useParam as a conditional to distinguish / check if kind is cats or kind is dogs */}
        {kind ==="Cat" && cats.map((cat) => (
          <Pet key={cat.id} kind="cat" pet={cat} />
        ))}

        {/* All dogs section */}
        {kind ==="Dog" && dogs.map((dog) => (
          <Pet key={dog.id} kind="dog" pet={dog} />
        ))}
      </section>
    </section>
  );
};

export default PetsList;
