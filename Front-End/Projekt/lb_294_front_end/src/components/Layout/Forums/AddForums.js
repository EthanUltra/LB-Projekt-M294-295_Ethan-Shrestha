import React, { useState } from "react";
import axios from "axios";
import "./Forums";
import { Link, useNavigate } from "react-router-dom";

export default function AddForums() {

    let navigate = useNavigate();

    const [forums, setForums] = useState({
        id: "",
        username: "",
        discussion: ""
    })


    const {id, username, discussion } = forums

    const onInputChange = (e) => {
        setForums({ ...forums, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/forum/add", forums);
        navigate("/Forums")
    };

    return (
        <div>
            <button><Link to="/Forums">Back to Forums</Link></button>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="registration">
                    <h1>Create a Forum</h1>¨
                    <label htmlFor="id">ID</label>
                    <input
                        type={"text"}
                        placeholder="ID..."
                        name="id"
                        value={id}
                        onChange={(e) => onInputChange(e)}
                    />
                    <label htmlFor="Username">Username</label>
                    <input
                        type={"text"}
                        placeholder="Username..."
                        name="username"
                        value={username}
                        onChange={(e) => onInputChange(e)}
                    />
                    <label>Discussion</label>
                    <input
                        type={"text"}
                        placeholder="Discussion..."
                        name="discussion"
                        value={discussion}
                        onChange={(e) => onInputChange(e)}
                    />
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
