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
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/Genres">Genres</Link>
                    </li>
                    <li>
                        <Link to="/Konto">Konto</Link>
                    </li>
                    <li>
                        <Link to="/Forums">Forums</Link>
                    </li>
                    <li>
                        <Link to="Sprache">Sprache</Link>
                    </li>
                    <li>
                        <Link to="/Favourite">Favourite</Link>
                    </li>
                    <li>
                        <Link to="TopBücher">Top Bücher</Link>
                    </li>
                    <li>
                        <Link to="Bewertungen">Bewertungen</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;