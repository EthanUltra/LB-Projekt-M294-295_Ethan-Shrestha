/* eslint-disable no-useless-constructor */
import React from 'react';
import { Link } from 'react-router-dom';
import './Account.css';
import styled from "styled-components"

const NavUnlisted = styled.ul`
  text-decoration: none;
`;

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'darkblue'
};

class Account extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavUnlisted>
                <h2>Your account</h2>
                
            <ul class="no-bullets">
                <li>
                    <Link to="/Privacy" style={linkStyle}>Privacy</Link>
                </li>

                <li>
                    <Link to="/Information" style={linkStyle}>Information</Link>
                </li>

                <li>
                    <Link to="/Orders" style={linkStyle}>Orders</Link>
                </li>
                <li>
                    <Link to="/TermsandService" style={linkStyle}>Terms and Service</Link>
                </li>
                <li>
                    <Link to="/Support" style={linkStyle}>Support</Link>
                </li>
            </ul>
            </NavUnlisted>
        )
    }
}

export default Account;