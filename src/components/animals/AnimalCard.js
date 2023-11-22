import { useState } from "react";
import { CareCard } from "../care/CareCard";

export const AnimalCard = ({ animal, isAdmin, setAnimals }) => {
  const [state, update] = useState("");

  return (
    <>
      <div className="titles">
        <p>{animal.name}</p>
      </div>

      {animal.cares && animal.cares.length > 0 ? (
        <CareCard care={animal.cares[0]} isAdmin={isAdmin} setAnimals={setAnimals} />
      ) : (
        <p>No care details available</p>
      )}
    </>
  );
};