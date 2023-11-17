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
      <label htmlFor="animalDropdown">Select an Animal:</label>
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


// Sarah's Attempt:
// import { Link, useNavigate } from "react-router-dom"
// import React, { useState, useEffect } from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';

// export const AnimalDropdown = () => {

// const navigate = useNavigate()
//  const [open, setOpen] = useState(false)

//    const toggle = () => setOpen(true);

//    const navClick = (stringNav) => {
//     return navigate(`/${stringNav}`)
//    }
//   return (
//     <div>
  
//   <Box sx={{ maxWidth: 120 }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">Select</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={open}
//           label="Age"
//           onChange={toggle}
//         >
//           <MenuItem value={10} onClick={navClick("canines")}>Canines</MenuItem>
//           <MenuItem value={20} onClick={navClick("felines")}>Felines</MenuItem>
//           <MenuItem value={30} onClick={navClick("reptiles")}>Reptiles</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
                  
//                   </div>
//                   );
//                 }



// Original I tweaked:
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AnimalDropdown = () => {
//   const navigate = useNavigate();
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleSelectChange = (event) => {
//     const selectedValue = event.target.value;
//     setSelectedOption(selectedValue);

//     navigate(selectedValue);
//   };

//   return (
//     <div>
//       <label htmlFor="animalDropdown">Select an Animal:</label>
//       <select id="animalDropdown" value={selectedOption} onChange={handleSelectChange}>
//         <option value="" disabled>
//           Select an animal
//         </option>
//         <option value="/canines">Canines</option>
//         <option value="/felines">Felines</option>
//         <option value="/reptiles">Reptiles</option>
//       </select>
//     </div>
//   );
// };

// export default AnimalDropdown;