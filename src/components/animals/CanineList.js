import React, { useEffect, useState } from "react";
import { AnimalCard } from "./AnimalCard";
import { Link, useNavigate } from "react-router-dom";
import "./AnimalLists.css";

export const CanineList = () => {
  const [animals, setAnimals] = useState([]);
  const [detailsVisible, setDetailsVisible] = useState(false); 
  const navigate = useNavigate();
  const localUser = localStorage.getItem("login_user");
  const UserObject = JSON.parse(localUser);

  const isAdmin = UserObject && UserObject.isAdmin;

  const getAllAnimals = () => {
    fetch('http://localhost:8088/animals/')
      .then(response => response.json())
      .then((animalArray) => {
        animalArray.sort((a, b) => a - b);
        setAnimals(animalArray);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:8088/animals?_embed=cares`)
      .then(response => response.json())
      .then((animalArray) => {
        const filteredCanines = animalArray.filter(singleAnimal => singleAnimal.id === 1);
        setAnimals(filteredCanines);
      });
  }, []);

  const handleEdit = (animalId) => {
    navigate(`/edit-animal/${animalId}`);
  };

  const handleDelete = (animalId) => {
    console.log(`Delete animal with ID: ${animalId}`);
  };

  const handleToggleDetails = () => {
    setDetailsVisible(!detailsVisible);
  };

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <>
      <article className="canine-list">
        {animals.map(animal => (
          <div key={animal.id}>
            <div className="toggle-image" onClick={handleToggleDetails}>
              <img src="https://i.pinimg.com/originals/09/32/66/093266637f59156b50e6125e07e02066.jpg" alt="Fuzzy Dog" />
            </div>
            {detailsVisible && (
              <>
                <AnimalCard animal={animal} />
                {isAdmin && (
                  <>
                    <button onClick={() => handleEdit(animal.id)}>Edit</button>
                    <button onClick={() => handleDelete(animal.id)}>Delete</button>
                  </>
                )}
              </>
            )}
          </div>
        ))}
        <br />
        <div className="btn-center">
        <button className="back-btn" onClick={handleGoBack}>Go Back</button>
          <Link to={`/animals/`}><button className="all-animals">See All Animals</button></Link>
        </div>
      </article>
    </>
  );
};
