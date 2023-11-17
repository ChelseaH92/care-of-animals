// import { useEffect, useState } from "react"
// import { AnimalCard } from "./AnimalCard"
// import { Link, useNavigate } from "react-router-dom"

// export const CanineList = () => {
//     const [animals, setAnimals] = useState([])
//     const navigate = useNavigate
//     const localUser = localStorage.getItem("login_user")
//     const UserObject = JSON.parse(localUser)

//     const getAllAnimals = () => {
//         fetch('http://localhost:8088/animals/')
//         .then(response => response.json())
//         .then((animalArray) => {
//             animalArray.sort((a,b) => {
//                 return a - b
//             })
//             setAnimals(animalArray)
//         })
//     }
// console.log(animals)
//     useEffect(
//         () => {
//             fetch(`http://localhost:8088/animals?_embed=cares`)
//                 .then(response => response.json())
//                 .then((animalArray) => {
//                     const filteredCanines = animalArray.filter(singleAnimal => singleAnimal.id === 1)
//                     setAnimals(filteredCanines)
                
//                 })
//         },
//         []
//     )

//     return (<>
//     <article className="animals container-md">
//         <h3>Their Care:</h3>
//             {
//                 animals.map(animal => <AnimalCard key={animal.id} animal= {animal}/>  )
//             }
//             <br />
//             <div className="btn-center">
//             <Link to={`/animals/`}><button className="btn btn-primary">See All Animals</button></Link>
//             </div>
//     </article>
//     </>)
// }

import React, { useEffect, useState } from "react";
import { AnimalCard } from "./AnimalCard";
import { Link, useNavigate } from "react-router-dom";

export const CanineList = () => {
  const [animals, setAnimals] = useState([]);
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

  return (
    <>
      <article className="animals container-md">
        <h3>Their Care:</h3>
        {
          animals.map(animal => (
            <div key={animal.id}>
              <AnimalCard animal={animal} />
              {isAdmin && (
                <>
                  <button onClick={() => handleEdit(animal.id)}>Edit</button>
                  <button onClick={() => handleDelete(animal.id)}>Delete</button>
                </>
              )}
            </div>
          ))
        }
        <br />
        <div className="btn-center">
          <Link to={`/animals/`}><button className="btn btn-primary">See All Animals</button></Link>
        </div>
      </article>
    </>
  );
};
