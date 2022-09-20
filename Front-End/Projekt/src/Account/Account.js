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

                <h5>
                    <Link to="/Privacy" style={linkStyle}>Privacy</Link>
                </h5>

                <h5>
                    <Link to="/Information" style={linkStyle}>Information</Link>
                </h5>

                <h5>
                    <Link to="/Orders" style={linkStyle}>Orders</Link>
                </h5>
                <h5>
                    <Link to="/TermsandService" style={linkStyle}>Terms and Service</Link>
                </h5>
                <h5>
                    <Link to="/Support" style={linkStyle}>Support</Link>
                </h5>
            </NavUnlisted>
        )
    }
}

export default Account;