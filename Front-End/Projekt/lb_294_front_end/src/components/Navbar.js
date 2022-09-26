import React from 'react';
import '../App';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <h1>React Books App</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/favourites"><h3>Your Favourites</h3></Link>
            </li>
            <li>
              <Link to="/genres"><h3>Genres</h3></Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar