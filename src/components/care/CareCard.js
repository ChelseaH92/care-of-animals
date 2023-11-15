// CareCard.js
import React from "react";

const CareCard = ({ care }) => {
  return (
    <div className="care-card">
      <h3>Care Information</h3>
      <p>Description: {care.descrip}</p>
      <p>Vet: {care.vet}</p>
      <p>Diet: {care.diet}</p>
      <p>Play: {care.play}</p>
      <p>Extra: {care.extra}</p>
    </div>
  );
};

export default CareCard;
