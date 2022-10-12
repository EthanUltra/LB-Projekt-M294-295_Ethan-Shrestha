import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../../../App';
import { Link } from 'react-router-dom';

function Forums() {

  const [Forums, setForums] = useState([]);

  useEffect(() => {
    loadForums();
  });

  const loadForums = async () => {
    const result = await Axios.get("http://localhost:8080/forum/forums");
    setForums(result.data);
  }

  const deleteForums = async (id) => {
    await Axios.delete(`http://localhost:8080/forum/forum/${id}`)
    loadForums()
  }

  return (
    <div className="Forums">
      <button><Link to="/AddForums">Add Forums</Link></button>
      <div>
        <h2 className="text-center">Forums List</h2>
        <div className="py-4">
          <table className="table border shadow">
            <tbody>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">Discussions</th>
                <th scope="col">Action</th>
              </tr>
            </tbody>
            <tbody>
              {Forums.map((Forums, index) => (
                <tr>
                  <th scope="row">{Forums.id}</th>
                  <td>{Forums.username}</td>
                  <td>{Forums.discussion}</td>
                  <td>
                    <button className="btn btn-primary xm-2"><Link to={`/ViewForums/${Forums.id}`}>View</Link></button>
                    <button className="btn btn-outline-primary xm-2"> <Link to={`/EditForums/${Forums.id}`}>Edit</Link></button>
                    <button className="btn btn-danger xm-2" onClick={() => deleteForums(Forums.id)}>Delete</button>
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

export default Forums