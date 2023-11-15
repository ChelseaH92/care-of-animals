import { useEffect, useState } from "react"
import { AnimalCard } from "./AnimalCard"
import { Link, useNavigate } from "react-router-dom"

export const AnimalList = () => {
    const [animals, setAnimals] = useState([])
    const navigate = useNavigate
    const localUser = localStorage.getItem("login_user")
    const UserObject = JSON.parse(localUser)

    const getAllAnimals = () => {
        fetch('http://localhost:8088/animals/')
        .then(response => response.json())
        .then((animalArray) => {
            animalArray.sort((a,b) => {
                return a - b
            })
            setAnimals(animalArray)
        })
    }
console.log(animals)
    useEffect(
        () => {
            fetch(`http://localhost:8088/animals/`)
                .then(response => response.json())
                .then((animalArray) => {
                    setAnimals(animalArray)
                })
        },
        []
    )

    return (<>
            <div className="btn-center">
            <Link to={`/animals/`}><button className="btn btn-primary">The Animals</button></Link>
            </div>
    <article className="animals container-md">
        <h3>Their Care:</h3>
            {
                animals.map(animal => <AnimalCard key={animal.id} animal= {animal}/>  )
            }
    </article>
    </>)
}