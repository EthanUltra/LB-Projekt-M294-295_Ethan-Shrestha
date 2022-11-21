import React, { useState } from "react";
import axios from "axios";
import "./Account";
import { Link, useNavigate } from "react-router-dom";

export default function AddAccount() {

    let navigate = useNavigate();

    const [account, setAccount] = useState({
        username: "",
        email: "",
        password: ""
    })


    const { username, email, password } = account

    const onInputChange = (e) => {
        setAccount({ ...account, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/account/add", account);
        navigate("/Account")
    };

    return (
        <div>
            <button><Link to="/Account">Back to Account</Link></button>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="registration">
                    <h1>Register an account</h1>
                    <label htmlFor="Username">Username</label>
                    <input
                        type={"text"}
                        placeholder="Username..."
                        name="username"
                        value={username}
                        onChange={(e) => onInputChange(e)}
                    />
                    <label>Email</label>
                    <input
                        type={"text"}
                        placeholder="Email..."
                        name="email"
                        value={email}
                        onChange={(e) => onInputChange(e)}
                    />
                    <label>Password</label>
                    <input
                        type={"password"}
                        placeholder="Password..."
                        name="password"
                        value={password}
                        onChange={(e) => onInputChange(e)}
                    />
                    <button type="submit"> Submit </button>
                </div>
            </form>
        </div>
    )
}
