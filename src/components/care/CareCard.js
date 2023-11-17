// import React from "react";

// export const CareCard = ({ care }) => {
//   return (
//     <div className="care-card">
//       <h3>Their Care:</h3>
//       <p>Description: {care.descrip}</p>
//       <p>Vet: {care.vet}</p>
//       <p>Diet: {care.diet}</p>
//       <p>Play: {care.play}</p>
//       <p>Extra Information: {care.extra}</p>
//     </div>
//   );
// };

import React, { useState } from "react";

export const CareCard = ({ care, isAdmin }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCare, setEditedCare] = useState({ ...care });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleDelete = () => {
    console.log("Care details deleted");
    setIsEditing(false);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCare((prevCare) => ({
      ...prevCare,
      [name]: value,
    }));
  };

  return (
    <div className="care-card">
      {isEditing ? (
        <>
          <h3>Edit Care Details:</h3>
          <label>
            Description:
            <input
              type="text"
              name="descrip"
              value={editedCare.descrip}
              onChange={handleChange}
            />
          </label>
          <label>
            Vet:
            <input
              type="text"
              name="vet"
              value={editedCare.vet}
              onChange={handleChange}
            />
          </label>
          <label>
            Diet:
            <input
              type="text"
              name="diet"
              value={editedCare.diet}
              onChange={handleChange}
            />
          </label>
          <label>
            Play:
            <input
              type="text"
              name="play"
              value={editedCare.play}
              onChange={handleChange}
            />
          </label>
          <label>
            Extra Information:
            <input
              type="text"
              name="extra"
              value={editedCare.extra}
              onChange={handleChange}
            />
          </label>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      ) : (
        <>
          <h3>Their Care:</h3>
          <p>Description: {care?.descrip}</p>
          <p>Vet: {care?.vet}</p>
          <p>Diet: {care?.diet}</p>
          <p>Play: {care?.play}</p>
          <p>Extra Information: {care?.extra}</p>
          {isAdmin && (
            <button onClick={handleEdit}>Edit</button>
          )}
        </>
      )}
    </div>
  )}