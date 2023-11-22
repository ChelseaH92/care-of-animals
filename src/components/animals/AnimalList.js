import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimalCard } from "./AnimalCard";

export const AnimalList = () => {
  const [animals, setAnimals] = useState([]);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [animalToDelete, setAnimalToDelete] = useState(null);
  const [editedCare, setEditedCare] = useState(null);
  const [isEditingCare, setIsEditingCare] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newAnimal, setNewAnimal] = useState({
    name: "",
    vet: "",
    descrip: "",
    diet: "",
    play: "",
    extra: ""
  });
  const navigate = useNavigate();
  const localUser = localStorage.getItem("login_user");
  const UserObject = JSON.parse(localUser);

  const isAdmin = UserObject.admin;

  const getAllAnimals = () => {
    fetch("http://localhost:8088/cares/")
      .then((response) => response.json())
      .then((animalArray) => {
        setAnimals(animalArray);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:8088/animals?_embed=cares`)
      .then((response) => response.json())
      .then((animalArray) => {
        setAnimals(animalArray);
      });
  }, []);

  const handleDelete = (animalId) => {
    setAnimalToDelete(animalId);
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    fetch(`http://localhost:8088/animals/${animalToDelete}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setAnimals((prevAnimals) =>
            prevAnimals.filter((animal) => animal.id !== animalToDelete)
          );
        } else {
          console.error("Failed to delete the animal");
        }
      })
      .catch((error) => {
        console.error("Error deleting the animal", error);
      })
      .finally(() => {
        setAnimalToDelete(null);
        setShowDeleteConfirmation(false);
      });
  };

  const cancelDelete = () => {
    setAnimalToDelete(null);
    setShowDeleteConfirmation(false);
  };

  const handleEditCare = (care) => {
    setEditedCare(care);
    setIsEditingCare(true);
  };

  const handleSaveCare = () => {
    setIsEditingCare(false);
  };

  const handleCancelCare = () => {
    setIsEditingCare(false);
  };

  const handleCreateAnimal = () => {
    setShowCreateModal(true);
  };

  const handleSaveAnimal = () => {
     const currentAnimalSave = {
      name: newAnimal.name
     }
  
    fetch("http://localhost:8088/animals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentAnimalSave),
    })
      .then((response) => response.json())
      .then((createdAnimal) => {
 
        // setAnimals((prevAnimals) => [...prevAnimals, createdAnimal]);
        // setShowCreateModal(false);
        const currentCaresSave ={
          animalId: createdAnimal.id,
          descrip: newAnimal.descrip,
          diet: newAnimal.diet,
          play: newAnimal.play,
          extra: newAnimal.extra,
          vet: newAnimal.vet
        }

        fetch("http://localhost:8088/cares", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(currentCaresSave),
        })
        .then(() => {

          setNewAnimal({
            name: "",
            descrip: "",
            vet: "",
            diet: "",
            play: "",
            extra: "",
          });
        })
      });
  };

  const handleCancelCreateAnimal = () => {
    setShowCreateModal(false);
    setNewAnimal({
          name: "",
          descrip: "",
          vet: "",
          diet: "",
          play: "",
          extra: "",
    });
  };

  const handleChangeNewAnimal = (e) => {
    const { name, value } = e.target;
    setNewAnimal((prevAnimal) => ({
      ...prevAnimal,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="btn-center">
        {isAdmin && (
          <>
            <button className="add-animal" onClick={handleCreateAnimal}>
              Add Animal
            </button>
          </>
        )}
      </div>

      {showDeleteConfirmation && (
        <div className="delete-confirmation">
          <p>Are you sure you want to delete this animal?</p>
          <button onClick={confirmDelete}>Delete</button>
          <button onClick={cancelDelete}>Cancel</button>
        </div>
      )}

      {showCreateModal && (
        <div className="create-animal-modal">
          <h3>Create a New Animal</h3>
          <label className="create-animal-input">
            Name:
            <input
              type="text"
              name="name"
              value={newAnimal.name}
              onChange={handleChangeNewAnimal}
            />
          </label>
          <label className="create-animal-input">
            Vet:
            <input
              type="text"
              name="vet"
              value={newAnimal.vet}
              onChange={handleChangeNewAnimal}
            />
          </label>
          <label className="create-animal-input">
            Description:
            <input
              type="text"
              name="descrip"
              value={newAnimal.descrip}
              onChange={handleChangeNewAnimal}
            />
          </label>
          <label className="create-animal-input">
            Diet:
            <input
              type="text"
              name="diet"
              value={newAnimal.diet}
              onChange={handleChangeNewAnimal}
            />
          </label>
          <label className="create-animal-input">
            Play:
            <input
              type="text"
              name="play"
              value={newAnimal.play}
              onChange={handleChangeNewAnimal}
            />
          </label>
          <label className="create-animal-input">
            Extra Information:
            <input
              type="text"
              name="extra"
              value={newAnimal.extra}
              onChange={handleChangeNewAnimal}
            />
          </label>
          <button className= "save-btn" onClick={handleSaveAnimal}>Save</button>
          <button className= "cancel-btn" onClick={handleCancelCreateAnimal}>Cancel</button>
        </div>
      )}
          <br />
      <article className="animals-container">
        <h3>Species:</h3>
        {animals.map((animal) => (
          <div key={animal.id}>
            <AnimalCard key={animal.id} animal={animal} isAdmin={isAdmin} setAnimals={setAnimals} />
          </div>
        ))}
      </article>
    </>
  );
    }