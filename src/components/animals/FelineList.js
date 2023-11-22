import React, { useEffect, useState } from "react";
import { AnimalCard } from "./AnimalCard";
import { Link, useNavigate } from "react-router-dom";
import "./AnimalLists.css";

export const FelineList = () => {
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
        const filteredFelines = animalArray.filter(singleAnimal => singleAnimal.id === 2);
        setAnimals(filteredFelines);
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
      <article className="feline-list">
        {animals.map(animal => (
          <div key={animal.id}>
            <div className="toggle-image" onClick={handleToggleDetails}>
              <img src="https://thumbs.dreamstime.com/b/portrait-red-persian-25996010.jpg" alt="Fuzzy Cat" />
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
          <Link to={`/animals/`}><button className="btn all-animals">See All Animals</button></Link>
        </div>
      </article>
    </>
  );
};
