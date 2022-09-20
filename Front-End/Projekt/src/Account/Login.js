/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-useless-constructor */
import React, {useState} from "react";
import './Login.css';
import { Link } from 'react-router-dom';

{/*

const [firstName, setFirstName] = useState(null);
const [lastName, setLastName] = useState(null);
const [email, setEmail] = useState(null);
const [password, setPassword] = useState(null);
const [confirmPassword, setConfirmPassword] = useState(null);

const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
        setFirstName(value);
    }
    if (id === "lastName") {
        setLastName(value);
    }
    if (id === "email") {
        setEmail(value);
    }
    if (id === "password") {
        setPassword(value);
    }
    if (id === "confirmPassword") {
        setConfirmPassword(value);
    }

}

const handleSubmit = () => {
    console.log(firstName, lastName, email, password, confirmPassword);
}

*/}

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        return (
            <div>
                <h4>Register or Login</h4>
                <br></br>
                <form>
                    <fieldset>
                        <legend>Login</legend>
                        <div>
                            <label for="name">Name: </label>
                            <input type="text" id="name" name="fname"></input>
                        </div>
                        <div>
                            <label for="password">Password: </label>
                            <input type="password" id="password"></input>
                        </div>
                    </fieldset>
                </form>
                <form>
                    <fieldset class="passwordForgotten">
                        <legend>Forgot your password?</legend>
                        <div>
                            <label for="PasswordForgotten">Email </label>
                            <input type="text" id="PasswordForgotten" name="PasswordForgotten"></input>
                        </div>
                        <input type="submit" value="Submit"></input>
                    </fieldset>
                </form>
                    {/*
                        <form>
                            <fieldset>
                                <legend>Register</legend>
                                <div class="username">
                                    <label className="form__label" for="firstName">First Name </label>
                                    <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name" />
                                </div>
                                <div className="lastname">
                                    <label className="form__label" for="lastName">Last Name </label>
                            <input type="text" name="" id="lastName" value={lastName} className="form__input" onChange={(e) => handleInputChange(e)} placeholder="Last Name" />
                                </div>
                                <div class="email">
                                    <label className="form__label" for="email">Email </label>
                            <input type="email" id="email" className="form__input" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email"></input>
                                </div>
                                <div className="password">
                                    <label className="form__label" for="password">Password </label>
                            <input className="form__input" type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Password" />
                                </div>
                                <div className="confirm-password">
                                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                            <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => handleInputChange(e)} placeholder="Confirm Password" />
                                </div>
                                <div class="footer">
                                    <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
                                </div>
                            </fieldset>
                        </form>
                    */}
                <p><Link to="../Account">Return to Account</Link></p>
            </div>
        )
    }
}


export default Login;