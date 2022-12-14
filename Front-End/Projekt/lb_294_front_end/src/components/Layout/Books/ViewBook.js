import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function ViewBook() {

    const [Book, setBook] = useState({
        title: "",
        authors: "",
        description: "",
        numPages: "",
        rating: "",
        rating_Count:"",
        review_Count:"",
        genre:""
    });

    const { id } = useParams();

    useEffect(() => {
        loadBook();
        // eslint-disable-next-line
    }, []);

    const loadBook = async () => {
        const result = await axios.get(`http://localhost:8080/book/book/${id}`)
        setBook(result.data);
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Book Details</h2>

                    <div className="card">
                        <div className="card-header">
                            Details of Book id: {Book.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Title:</b>
                                    {Book.title}
                                </li>
                                <li className="list-group-item">
                                    <b>Author:</b>
                                    {Book.authors}
                                </li>
                                <li className="list-group-item">
                                    <b>Description:</b>
                                    {Book.description}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/Book"}>Back to Book</Link>
                </div>
            </div>
        </div>
    );
}
