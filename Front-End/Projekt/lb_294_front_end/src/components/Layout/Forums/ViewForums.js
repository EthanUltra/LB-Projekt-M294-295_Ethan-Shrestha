import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function ViewForums() {

    const [forums, setForums] = useState({
        username: "",
        discussion: ""
    });

    const { id } = useParams();

    useEffect(() => {
        loadForums();
        // eslint-disable-next-line
    }, []);

    const loadForums = async () => {
        const result = await axios.get(`http://localhost:8080/forum/forum/${id}`)
        setForums(result.data);
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Forums Details</h2>

                    <div className="card">
                        <div className="card-header">
                            Details of forum id: {forums.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Username:</b>
                                    {forums.username}
                                </li>
                                <li className="list-group-item">
                                    <b>Discussion:</b>
                                    {forums.discussion}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/Forums"}>Back to Forums</Link>
                </div>
            </div>
        </div>
    );
}
export default ViewForums;