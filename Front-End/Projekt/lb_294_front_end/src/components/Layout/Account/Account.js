import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../../../App';
import { Link } from 'react-router-dom';

function Account() {

  const [account, setAccount] = useState([]);

  useEffect(() => {
    loadAccount();
  });

  const loadAccount = async () => {
    const result = await Axios.get("http://localhost:8080/account/accounts");
    setAccount(result.data);
  }

  const deleteAccount = async (id) => {
    await Axios.delete(`http://localhost:8080/account/account/${id}`)
    loadAccount()
  }

  return (
    <div className="Account">
      <button><Link to="/AddAccount">Add Account</Link></button>
      <div>
        <h2 className="text-center">Account List</h2>
        <div className="py-4">
          <table className="table border shadow">
            <tbody>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Action</th>
              </tr>
            </tbody>
            <tbody>
              {account.map((account, index) => (
                <tr>
                  <th scope="row">{account.id}</th>
                  <td>{account.username}</td>
                  <td>{account.email}</td>
                  <td>{account.password}</td>
                  <td>
                    <button className="btn btn-primary xm-2"><Link to={`/ViewAccount/${account.id}`}>View</Link></button>
                    <button className="btn btn-outline-primary xm-2"> <Link to={`/EditAccount/${account.id}`}>Edit</Link></button>
                    <button className="btn btn-danger xm-2" onClick={() => deleteAccount(account.id)}>Delete</button>
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

export default Account