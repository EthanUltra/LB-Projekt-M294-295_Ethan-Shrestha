/* eslint-disable no-useless-constructor */
import React from 'react';

class Favourite extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>Here are your favourite books!</h4>
            </div>
        )
    }
}

export default Favourite;