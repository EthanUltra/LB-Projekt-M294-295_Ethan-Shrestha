import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Forums";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditForums() {

    let navigate = useNavigate();

    const { id } = useParams()

    const [forums, setForums] = useState({
        username: "",
        discussion: ""
    })


    const { username, discussion } = forums

    const onInputChange = (e) => {
        setForums({ ...forums, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadForums()
        // eslint-disable-next-line
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/forum/forum/${id}`, forums);
        navigate("/Forums")
    };

    const loadForums = async () => {
        const result = await axios.get(`http://localhost:8080/forum/forum/${id}`)
        setForums(result.data)
    }

    return (
        <div>
            <button><Link to="/Forums">Back to Forums</Link></button>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="registration">
                    <h1>Edit Forums</h1>
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
