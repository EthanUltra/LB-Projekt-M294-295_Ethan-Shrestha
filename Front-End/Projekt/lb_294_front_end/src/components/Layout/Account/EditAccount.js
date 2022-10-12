import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Account";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditAccount() {

    let navigate = useNavigate();

    const {id}=useParams()

    const [account, setAccount] = useState({
        username: "",
        email: "",
        password: ""
    })


    const { username, email, password } = account

    const onInputChange = (e) => {
        setAccount({ ...account, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadAccount()
        // eslint-disable-next-line
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/account/account/${id}`, account);
        navigate("/Account")
    };

    const loadAccount =async ()=>{
        const result = await axios.get(`http://localhost:8080/account/account/${id}`)
        setAccount(result.data)
    }

    return (
        <div>
            <button><Link to="/Account">Back to Account</Link></button>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="registration">
                    <h1>Edit User</h1>
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
                    <button type="submit"> Register </button>
                </div>
            </form>
        </div>
    )
}
