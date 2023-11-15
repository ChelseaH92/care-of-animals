import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { NavBar } from "../nav/NavBar"

export const AnimalForm = ({ state, update }) => {
  
    const [animal, setAnimal] = useState({
        name: ""
    })
   
    const navigate = useNavigate()

    const localUser = localStorage.getItem("login_user")
    const UserObject = JSON.parse(localUser)

    const getAllAnimals = () => {
        fetch('http://localhost:8088/animals/')
        .then(response => response.json())
        .then((animalArray) => {
            animalArray.sort((a,b) => {
                return a.name.localeCompare(b.name);
            });
            setAnimal(animalArray)
        })
    }

    const handleSaveButtonClick = (e) => {
        e.preventDefault()
        
        const animalToSendToAPI = {
            name: animal.name,
        }


        fetch(`http://localhost:8088/animals`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animalToSendToAPI)
        })

            .then(response => response.json())
            .then(() => {
                setAnimal({
                    name: "",
                });
            })
            .then(() => {
                navigate("/");
                getAllAnimals()
            })
    }

    const handleInputChange = (e) => {
        setAnimal({ ...animal, name: e.target.value });
      };

     return (
       <form className="animalForm">
         <h2 className="animalForm__title">The Animals:</h2>
         <fieldset>
           <div className="form-group">
             <label htmlFor="objective">Animal name:</label>
             <input
               type="text"
               id="name"
               required
               autoFocus
               className="form-control"
               placeholder="Name"
               value={animal.name}
               onChange={handleInputChange}
             />
           </div>
         </fieldset>
         <button onClick={handleSaveButtonClick}>Save To Account</button>
       </form>
     )

}