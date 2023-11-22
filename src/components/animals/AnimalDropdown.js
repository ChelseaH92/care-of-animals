import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AnimalDropdown = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    navigate(selectedValue);
  };

  return (
    <div>
      <label htmlFor="animalDropdown"><b>Select an Animal:</b></label>
      <br />
      <select id="animalDropdown" value={selectedOption} onChange={handleSelectChange}>
        <option value="" disabled>
          Select
        </option>
        <option value="/canines">Canines</option>
        <option value="/felines">Felines</option>
        <option value="/reptiles">Reptiles</option>
      </select>
    </div>
  );
};

export default AnimalDropdown;