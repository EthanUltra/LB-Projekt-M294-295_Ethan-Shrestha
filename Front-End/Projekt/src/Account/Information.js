/* eslint-disable no-useless-constructor */
import React from "react";
import { Link } from 'react-router-dom';

class Information extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>This is your Information!</h4>
                <p><Link to="../Account">Return to Account</Link></p>
            </div>
        )
    }
}

export default Information;