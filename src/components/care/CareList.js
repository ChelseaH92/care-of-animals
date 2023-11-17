import React from "react";
import CareCard from "./CareCard";

const CareList = ({ careList }) => {
  return (
    <div className="care-list">
      <h2>Care Information List</h2>
      {careList.map((care) => (
        <CareCard key={care.id} care={care} />
      ))}
    </div>
  );
};

export default CareList;


// import { useEffect, useState } from "react"
// import { CareCard } from "./CareCard"
// import { Link, useNavigate } from "react-router-dom"

// export const CareList = () => {
//     const [care, setCare] = useState([])
//     const navigate = useNavigate
//     const localUser = localStorage.getItem("login_user")
//     const UserObject = JSON.parse(localUser)

//     const getAllCare = () => {
//         fetch('http://localhost:8088/care/')
//         .then(response => response.json())
//         .then((careArray) => {
//             careArray.sort((a,b) => {
//                 return a - b
//             })
//             setCare(careArray)
//         })
//     }
// console.log(care)
//     useEffect(
//         () => {
//             fetch(`http://localhost:8088/cares?_embed=cares`)
//                 .then(response => response.json())
//                 .then((careArray) => {
//                     setCare(careArray)
//                 })
//         },
//         []
//     )

//     return (<>
//             <div className="btn-center">
//             <Link to={`/cares/`}><button className="btn btn-primary">The care involved</button></Link>
//             </div>
//     <article className="cares container-md">
//         <h3>Their Care:</h3>
//             {
//                 care.map(care => <careCard key={care.id} care= {care}/>  )
//             }
//     </article>
//     </>)
// }