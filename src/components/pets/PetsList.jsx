import React from "react";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { Link } from "react-router-dom"

export const PetsList = ({ pets }) => {
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
        {/* All cats section */}
        {cats.map((cat) => (
          <Link key={cat.id} to={`/pets/cats/${cat.id}`}>
            <Pet kind="cat" pet={cat} />
          </Link>
        ))}

        {/* All dogs section */}
        {dogs.map((dog) => (
          <Link key={dog.id} to={`/pets/dogs/${dog.id}`}>
            <Pet kind="dog" pet={dog} />
          </Link>
        ))}
      </section>
    </section>
  );
};

export default PetsList;
