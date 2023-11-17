import { useEffect, useState } from "react";
import { AnimalCard } from "./AnimalCard";
import { Link, useNavigate } from "react-router-dom";
import { CareCard } from "../care/CareCard";

export const AnimalList = () => {
  const [animals, setAnimals] = useState([]);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [animalToDelete, setAnimalToDelete] = useState(null);
  const navigate = useNavigate();
  const localUser = localStorage.getItem("login_user");
  const UserObject = JSON.parse(localUser);

  const isAdmin = UserObject.admin;

  const getAllAnimals = () => {
    fetch("http://localhost:8088/animals/")
      .then((response) => response.json())
      .then((animalArray) => {
        animalArray.sort((a, b) => {
          return a - b;
        });
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

  const handleEdit = () => {
    navigate("/edit-animals");
  };

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

  return (
    <>
      <div className="btn-center">
        {isAdmin && (
          <>
            <Link to="/edit-animals">
              <button className="btn btn-primary">Edit</button>
            </Link>
            <button className="btn btn-danger" onClick={() => handleDelete(animals.id)}>
              Delete
            </button>
          </>
        )}
      </div>

      {showDeleteConfirmation && (
        <div className="delete-confirmation-modal">
          <p>Are you sure you want to delete this animal?</p>
          <button onClick={confirmDelete}>Delete</button>
          <button onClick={cancelDelete}>Cancel</button>
        </div>
      )}

      <article className="animals container-md">
        <h3>Species:</h3>
        {animals.map((animal) => (
          <div key={animal.id}>
            <AnimalCard key={animal.id} animal={animal} />
            <CareCard care={animal.care} isAdmin={isAdmin} />
          </div>
        ))}
      </article>
    </>
  );
};
