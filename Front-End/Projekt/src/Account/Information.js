/* eslint-disable no-useless-constructor */
import React from "react";
import { Link } from 'react-router-dom';
import './Information.css'
class Information extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>About the Webshop</h4> 
                <h4>This Webshop is created in 2022 by Ethan, it's purpose was publish books, buy books or make a review/rating about them. You can also disucss with other people in the forums. Have a nice day.</h4>
                <p><Link to="../Account">Return to Account</Link></p>
            </div>
        )
    }
}

export default Information;