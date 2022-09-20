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
                <h4>Privacy</h4>
                <br></br>
                <form>
                    <fieldset class="passwordreset">
                        <legend>New password?</legend>
                        <div>
                            <label>Old Password: </label>
                            <input type="Password" id="myOldPassword"></input>
                        </div>
                        <div>
                            <label>New Password: </label>
                            <input type="Password" id="myNewPassword"></input>
                        </div>
                        <div>
                            <label>Confirm Password: </label>
                            <input type="Password" id="confirmedPassword"></input>
                        </div>
                        <input type="submit" value="Submit"></input>
                    </fieldset>
                </form>
                <form>
                    <fieldset>
                    <legend>Your profile</legend>
                    <div>
                        <label>Public</label>
                        <input type="radio" id="public" name="privacy" value="PUBLIC"></input>
                    </div>
                    <div>
                        <label>Private</label>
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