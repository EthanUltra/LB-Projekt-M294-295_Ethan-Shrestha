/* eslint-disable no-useless-constructor */
import React from "react";
import { Link } from 'react-router-dom';
import "./Privacy.css";

class Privacy extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>Change your account privacy!</h4>
                <form>
                    <fieldset class="passwordreset">
                        <legend>Reset your password</legend>
                    <div>
                        <label>Password:</label>
                        <input type="password" id="myPassword"></input>
                    </div>
                    <div>
                        <label>Confirm Password:</label>
                        <input type="password" id="myConfirmedPassword"></input>
                    </div>
                    <input type="submit" value="Submit"></input>
                </fieldset>
                </form>
                <br></br>
                <form>
                    <fieldset>
                    <legend>Your profile</legend>
                    <div>
                        <label>Public:</label>
                        <input type="radio" id="public" name="privacy" value="PUBLIC"></input>
                    </div>
                    <div>
                        <label>Private:</label>
                        <input type="radio" id="private" name="privacy" value="PRIVATE"></input>
                    </div>
                    </fieldset>
                </form>
                <p><Link to="../Account">Return to Account</Link></p>
            </div>
        )
    }
}

export default Privacy;