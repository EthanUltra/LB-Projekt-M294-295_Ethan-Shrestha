import React, { useState } from "react";
import axios from "axios";
import "./Book";
import { Link, useNavigate } from "react-router-dom";

export default function AddBook() {

    let navigate = useNavigate();

    const [book, setBook] = useState({
        id: "",
        title: "",
        authors: "",
        description: "",
        numPages: "",
        rating: "",
        rating_Count: "",
        review_Count: "",
        genre: ""
    })


    const { id, title, authors, description, numPages, rating, rating_Count, review_Count, genres } = book

    const onInputChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/book/add", book);
        navigate("/Book")
    };

    return (
        <div>
            <button><Link to="/Book">Back to Book</Link></button>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="registration">
                    <h1>Add an Book</h1>
                    <label htmlFor="id">ID</label>
                    <input
                        type={"text"}
                        placeholder="ID..."
                        name="id"
                        value={id}
                        onChange={(e) => onInputChange(e)}
                    />
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
                    <label>Number of Pages</label>
                    <input
                        type={"text"}
                        placeholder="Number of Pages..."
                        name="numPages"
                        value={numPages}
                        onChange={(e) => onInputChange(e)}
                    />
                    <label>Rating (with decimals)</label>
                    <input
                        type={"text"}
                        placeholder="Rating from 1-5..."
                        name="rating"
                        value={rating}
                        onChange={(e) => onInputChange(e)}
                    />
                    <label>Rating Count</label>
                    <input
                        type={"text"}
                        placeholder="Rating Count..."
                        name="rating_Count"
                        value={rating_Count}
                        onChange={(e) => onInputChange(e)}
                    />
                    <label>Review Count</label>
                    <input
                        type={"text"}
                        placeholder="Review Count..."
                        name="review_Count"
                        value={review_Count}
                        onChange={(e) => onInputChange(e)}
                    />
                    <label>Genre</label>
                    <input
                        type={"text"}
                        placeholder="Genre..."
                        name="genres"
                        value={genres}
                        onChange={(e) => onInputChange(e)}
                    />
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
