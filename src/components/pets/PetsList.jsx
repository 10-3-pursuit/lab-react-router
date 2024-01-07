import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";

export const PetsList = ({ pets, isPetsRoute, showCats }) => {
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
        if (isPetsRoute) {
            console.log("Hello World");
            navigate("/pets/cats");
        }
    }, []);

    return (
        <section className="pets-wrapper">
            <PetsListNav cats={cats} dogs={dogs} />
            <section className="pets-list">
                {/* All cats section */}
                {showCats
                    ? cats.map((cat) => (
                          <Pet key={cat.id} kind="cat" pet={cat} />
                      ))
                    : dogs.map((dog) => (
                          <Pet key={dog.id} kind="dog" pet={dog} />
                      ))}
            </section>
        </section>
    );
};

export default PetsList;
