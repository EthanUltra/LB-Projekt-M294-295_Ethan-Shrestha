/* eslint-disable no-useless-constructor */
import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav>
                <div class="navigation_1">
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
                            <Link to="/Home">Home</Link>
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
                </div>
            </nav>
        )
    }
}

export default Navigation;