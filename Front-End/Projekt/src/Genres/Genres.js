/* eslint-disable no-useless-constructor */
import React from 'react';

class Genres extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>Horror</h4>
                <h4>Action</h4>
                <h4>Love</h4>
            </div>
        )
    }
}

export default Genres;