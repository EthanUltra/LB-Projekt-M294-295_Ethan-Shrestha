/* eslint-disable no-useless-constructor */
import React from "react";
import { Link } from 'react-router-dom';

class Terms_and_Service extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>Read the Terms and Service!</h4>
                <p><Link to="../Account">Return to Account</Link></p>
            </div>
        )
    }
}

export default Terms_and_Service;