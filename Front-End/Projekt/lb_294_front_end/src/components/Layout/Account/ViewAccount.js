import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function ViewAccount() {

    const [account, setAccount] = useState({
        username: "",
        email: "",
        password: ""
    });

    const { id } = useParams();
    
    useEffect(() => {
        loadAccount();
        // eslint-disable-next-line
    }, []);

    const loadAccount = async () => {
        const result = await axios.get(`http://localhost:8080/account/account/${id}`)
        setAccount(result.data);
    };


return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">User Details</h2>

                <div className="card">
                    <div className="card-header">
                        Details of account id: {account.id}
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <b>Username:</b>
                                {account.username}
                            </li>
                            <li className="list-group-item">
                                <b>Email:</b>
                                {account.email}
                            </li>
                            <li className="list-group-item">
                                <b>Password:</b>
                                {account.password}
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className="btn btn-primary my-2" to={"/account"}>Back to Account</Link>
            </div>
        </div>
    </div>
);
}
export default ViewAccount;