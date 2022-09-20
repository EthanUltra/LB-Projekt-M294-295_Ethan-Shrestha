/* eslint-disable no-useless-constructor */
import React from 'react';
import './Rating.css';

class Rating extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>Ratings: 5/5</h4>
            </div>
        )
    }
}

export default Rating;