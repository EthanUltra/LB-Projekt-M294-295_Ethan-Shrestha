import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Book";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditBook() {

    let navigate = useNavigate();

    const { id } = useParams()

    const [Book, setBook] = useState({
        title: "",
        authors: "",
        description: ""
    })


    const { title, authors, description } = Book

    const onInputChange = (e) => {
        setBook({ ...Book, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadBook()
        // eslint-disable-next-line
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/book/book/${id}`, Book);
        navigate("/Book")
    };

    const loadBook = async () => {
        const result = await axios.get(`http://localhost:8080/book/book/${id}`)
        setBook(result.data)
    }

    return (
        <div>
            <button><Link to="/Book">Back to Book</Link></button>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="registration">
                    <h1>Edit Book</h1>
                    <label htmlFor="title">Title</label>
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
                        placeholder="Description..."
                        name="description"
                        value={description}
                        onChange={(e) => onInputChange(e)}
                    />
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
