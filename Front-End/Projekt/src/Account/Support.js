/* eslint-disable no-useless-constructor */
import React from "react";
import { Link } from 'react-router-dom';

class Support extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>Call or email us if you need help!</h4>
                <h4>+41...</h4>
                <h4>wiss@edu.com...</h4>
                <p><Link to="../Account">Return to Account</Link></p>
            </div>
        )
    }
}

export default Support;