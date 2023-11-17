import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"
// import './RegisterButton.css';

export const Login = () => {
    const [email, set] = useState("")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("login_user", JSON.stringify({
                        id: user.id,
                        userName: user.fullName,
                        admin: user.isAdmin
                    }))

                    navigate("/")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (
        <main className="container--login">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>For the Care of Animals</h1>
                    <h2>Please Sign in or Register</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            value={email}
                            onChange={e => set(e.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                        {/* <label htmlFor="inputPassword"> Password </label>
                        <input type="password"
                            value={password}
                            onChange={e => set(e.target.value)}
                            className="form-control"
                            placeholder="Password"
                            required autoFocus /> */}
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register" className="register-button">Not a member yet?</Link>
            </section>
        </main>
    )
}