import { useState } from "react"
import { AnimalList } from "./AnimalList"
import { AnimalForm } from "./AnimalForm"
import { CareCard } from "../care/CareCard"

export const AnimalCard = ({animal}) => {
    const [state, update] = useState("")
    
    return (
        <>
            <p>{animal.name}</p>

         <CareCard care={animal.cares[0]} />
        </>
    )
}