import React from "react";
import CareCard from "./CareCard";

const CareList = ({ careList }) => {
  return (
    <div className="care-list">
      <h2>Care Information List</h2>
      {careList.map((care) => (
        <CareCard key={care.id} care={care} />
      ))}
    </div>
  );
};

export default CareList;