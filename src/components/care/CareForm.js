import React, { useState } from "react";

const CareForm = ({ onSave }) => {
  const [newCare, setNewCare] = useState({
    descrip: "",
    vet: "",
    diet: "",
    play: "",
    extra: "",
  });

  const handleInputChange = (e) => {
    setNewCare({ ...newCare, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(newCare);
    setNewCare({
      descrip: "",
      vet: "",
      diet: "",
      play: "",
      extra: "",
    });
  };

  return (
    <div className="care-form">
      <h3>Add Care Information</h3>
      <label>Description:</label>
      <input
        type="text"
        name= {care.descrip}
        value={newCare.descrip}
        onChange={handleInputChange}
      />
      {/* Add the rest 'vet, diet, play, extra' later */}
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default CareForm;
