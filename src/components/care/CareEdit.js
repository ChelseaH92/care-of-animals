import React, { useState } from "react";

const CareEdit = ({ care, onSave }) => {
  const [editedCare, setEditedCare] = useState({ ...care });

  const handleInputChange = (e) => {
    setEditedCare({ ...editedCare, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(editedCare);
  };

  return (
    <div className="care-edit">
      <h3>Edit Care Information</h3>
      <label>Description:</label>
      <input
        type="text"
        name="descrip"
        value={editedCare.descrip}
        onChange={handleInputChange}
      />
      {/* Add the rest 'vet, diet, play, extra' later */}
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default CareEdit;
