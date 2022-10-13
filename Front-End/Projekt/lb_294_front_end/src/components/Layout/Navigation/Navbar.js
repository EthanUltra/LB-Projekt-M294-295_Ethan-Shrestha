import React from 'react';
import '../../../App';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <h1>React Books Webshop</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/"><h3>Home</h3></Link>
            </li>
            <li>
              <Link to="/account"><h3>Account</h3></Link>
            </li>
            <li>
              <Link to="/book"><h3>Books</h3></Link>
            </li>
            <li>
              <Link to="/favourites"><h3>Favourites</h3></Link>
            </li>
            <li>
              <Link to="/forums"><h3>Forums</h3></Link>
            </li>
            <li>
              <Link to="/orders"><h3>Orders</h3></Link>
            </li>
            <li>
              <Link to="/searchbar"><h3>Searchbar</h3></Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar