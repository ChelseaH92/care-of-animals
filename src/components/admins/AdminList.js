import { useEffect, useState } from "react"
import "./Admin.css"
import { Admin } from "./Admin"

export const AdminList = () => {
    const [admin, setAdmins] = useState([])

    useEffect (
        () => {
            fetch(`http://localhost:8088/admin?_expand=user`)
            .then(response => response.json())
            .then((adminArray) => {
                setAdmins(adminArray)
            })
        },
        []
    )

    return <article className="admins">
    {
        admin.map(admin => <Admin key={admin.id}
            id={admin.id} 
            fullName= {admin.user?.fullName} 
            email={admin.email}/>)
    }
    </article>
}