import { useState } from "react"
import { AnimalList } from "./AnimalList"
import { AnimalForm } from "./AnimalForm"

export const AnimalCard = ({animal}) => {
    const [state, update] = useState("")
    
    return (
        <>
            <p>{animal.name}</p>
        </>
    )
}