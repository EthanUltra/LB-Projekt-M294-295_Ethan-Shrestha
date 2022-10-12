import React, { useState } from "react";
import axios from "axios";
import "./Book";
import { Link, useNavigate } from "react-router-dom";

export default function AddBook() {

    let navigate = useNavigate();

    const [book, setBook] = useState({
        title: "",
        authors: "",
        description: "",
        rating: ""
    })


    const { title, authors, description, rating } = book

    const onInputChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/book/add", book);
        navigate("/Books")
    };

    return (
        <div>
            <button><Link to="/Books">Back to Book</Link></button>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="registration">
                    <h1>Add an Book</h1>
                    <label htmlFor="Title">Title</label>
                    <input
                        type={"text"}
                        placeholder="Title..."
                        name="title"
                        value={title}
                        onChange={(e) => onInputChange(e)}
                    />
                    <label>Authors</label>
                    <input
                        type={"text"}
                        placeholder="Author..."
                        name="authors"
                        value={authors}
                        onChange={(e) => onInputChange(e)}
                    />
                    <label>Description</label>
                    <input
                        type={"text"}
                        placeholder="description..."
                        name="description"
                        value={description}
                        onChange={(e) => onInputChange(e)}
                    />
                    <label>Rating</label>
                    <input
                        type={"text"}
                        placeholder="Rating from 1-5..."
                        name="rating"
                        value={rating}
                        onChange={(e) => onInputChange(e)}
                    />
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
