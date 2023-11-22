import React, { useState, useEffect } from 'react';
import "./Account.css"

export const Account = () => {
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
    const userString = localStorage.getItem("login_user")
    const userObject = JSON.parse(userString)
      fetch(`http://localhost:8088/users/${userObject.id}`) 
        .then(response => response.json())
        .then(data => {
          const currentUser = data;
          setUserData(currentUser);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []); 
  console.log(userData)
  
    return (
        userData ?
            <div className="account-card">
            <h1>User Account Page</h1>
            <h2><span className='name-card'>Name:</span> {userData.fullName}</h2>
            <p><span className='email-card'>Email:</span> {userData.email}</p>
            <div>
            </div>
          </div>
          :
          <div>Loading...</div>
        
        
      );
    };
  
  export default Account;