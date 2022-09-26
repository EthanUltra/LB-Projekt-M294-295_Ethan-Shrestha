/* eslint-disable no-useless-constructor */
import React from 'react';
import { Link } from 'react-router-dom';
import './App';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="navigation_1">
                <div>
                    <h1>React Books App</h1>
                </div>
                <div>Your favourites</div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/Account">Account</Link>
                        </li>
                        <li>
                            <Link to="/Favourite">Favorite</Link>
                        </li>
                        <li>
                            <Link to="/Forums">Forums</Link>
                        </li>
                        <li>
                            <Link to="/Genres">Genres</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Language">Language</Link>
                        </li>
                        <li>
                            <Link to="/Rating">Ratings</Link>
                        </li>
                        <li>
                            <Link to="/TopBooks">Top Books</Link>
                        </li>
                        <li>
                            <Link to="./AGB">AGB</Link>
                        </li>
                        <li>
                            <Link to="./Impressum">Impressum</Link>
                        </li>
                        <li>
                            <Link to="./Datenschutzerklärung">Datenschutzerklärung</Link>
                        </li>
                    </ul>
                </nav>
            </div>    
        )
    }
}

export default Navigation;