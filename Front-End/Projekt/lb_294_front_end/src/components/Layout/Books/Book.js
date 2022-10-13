import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../../../App';
import { Link } from 'react-router-dom';

function Book() {

    const [Book, setBook] = useState([]);

    useEffect(() => {
        loadBook();
    });

    const loadBook = async () => {
        const result = await Axios.get("http://localhost:8080/book/books");
        setBook(result.data);
    }

    const deleteBook = async (id) => {
        await Axios.delete(`http://localhost:8080/book/book/${id}`)
        loadBook()
    }

    return (
        <div className="Book">
            <button><Link to="/AddBook">Add Book</Link></button>
            <div>
                <h2 className="text-center">Book List</h2>
                <div className="py-4">
                    <table className="table border shadow">
                        <tbody>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Authors</th>
                                <th scope="col">Description</th>
                                <th scope="col">Action</th>
                            </tr>
                        </tbody>
                        <tbody>
                            {Book.map((book, index) => (
                                <tr>
                                    <th scope="row">{book.id}</th>
                                    <td>{book.title}</td>
                                    <td>{book.authors}</td>
                                    <td>{book.description}</td>
                                    <td>
                                        <button className="btn btn-primary xm-2"><Link to={`/ViewBook/${book.id}`}>View</Link></button>
                                        <button className="btn btn-outline-primary xm-2"> <Link to={`/EditBook/${book.id}`}>Edit</Link></button>
                                        <button className="btn btn-danger xm-2" onClick={() => deleteBook(book.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))};
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Book