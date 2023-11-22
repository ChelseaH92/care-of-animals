import React, { useState, useEffect } from "react";
import "./Care.css"

export const CareCard = ({ care, isAdmin, setAnimals }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCare, setEditedCare] = useState({});

useEffect(() => {
  setEditedCare(care)
}, [])


  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleDelete = () => {
    fetch(`http://localhost:8088/cares/${care.id}`, {
      method: "DELETE",
    }).then(() => {
      fetch(`http://localhost:8088/animals/${care.animalId}`, {
        method: "DELETE",
      })
    })
      .then(() => {
        console.log("Care details deleted");
        setIsEditing(false);
        fetch(`http://localhost:8088/animals?_embed=cares`)
          .then((response) => response.json())
          .then((animalArray) => {
            setAnimals(animalArray);
          })
          .catch((error) => {
            console.error("Error updating animal list after care deletion:", error);
          });
      })
      .catch((error) => {
        console.error("Error deleting care details:", error);
      });
  };

  const handleSaveButtonClick = (e) => {
    e.preventDefault()
   

    fetch(`http://localhost:8088/cares/${care.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedCare)
    })

        .then(response => response.json())
        .then(() => {
          setIsEditing(false);
          return fetch(`http://localhost:8088/animals?_embed=cares`);
        })
        .then((response) => response.json())
        .then((animalArray) => {
          setAnimals(animalArray);
        })
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
          <button className= "btn-save" onClick={handleSaveButtonClick}>Save</button>
          <button className="btn-cancel" onClick={handleCancel}>Cancel</button>
          <button className="btn-delete" onClick={handleDelete}>Delete</button>
        </>
      ) : (
        <>
          { care && (
            <>
          <p><span className="info-label">Description:</span> {care?.descrip}</p>
          <p><span className="info-label">Vet:</span> {care?.vet}</p>
          <p><span className="info-label">Diet:</span> {care?.diet}</p>
          <p><span className="info-label">Play:</span> {care?.play}</p>
          <p><span className="info-label">Extra Information:</span> {care?.extra}</p>
          </>
          )}
          <br />
          {isAdmin && (
            <button className="btn-edit" onClick={handleEdit}>Edit</button>
          )}
        </>
      )}
    </div>
  )}