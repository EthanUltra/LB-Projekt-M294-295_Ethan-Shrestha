import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../../../App';
import ListAccountComponent from './ListAccountComponent';

function Account() {

  const [usernameReg, setUsernameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  useEffect(() => {
    fetch('http:/localhost:8080/api/accounts').then(resp => resp.text())
      .then(resp => {
        console.log('Getting data from API')
      })
    loadAccounts();
  }, []);

  const loadAccounts=async()=>{
    const result=await Axios.get("http://localhost:8080/account/accounts");
    setUsernameReg(result.data);
  };

  /*
  const register = () => {
    Axios.post('http://localhost:8080/api/accounts', {
      username: usernameReg,
      email: emailReg,
      password: passwordReg
    }).then((response) => {
      console.log(response);
    })
  }

  const login = () => {
    ?
  }
  */



  return (
    <div className="Account">
      <div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input
          type="text" placeholder="Username..."
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <label>Email</label>
        <input
          type="text" placeholder="Email..."
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="text" placeholder="Password..."
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button /*onClick={Register}*/> Register </button>
      </div>
      <div className="login">
        <h1>Login</h1>
        <label>Username</label>
        <input type="text" placeholder="Username..." />
        <label>Email</label>
        <input type="text" placeholder="Email..." />
        <label>Password</label>
        <input type="password" placeholder="Password..." />
        <button> Login </button>
      </div>
      <ListAccountComponent />
    </div>
  );
}

export default Account