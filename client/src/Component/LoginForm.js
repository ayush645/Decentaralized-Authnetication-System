// src/components/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Web3 from 'web3';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      // Store the JWT token in local storage
      localStorage.setItem('token', response.data.token);
      // Redirect to the dashboard page
      window.location.replace('/dashboard');
    } catch (error) {
        console.log('Login failed: ', error.response.data);
        setError(error.response.data.error);
    }

   


  };

  const handleWeb3Login = async () => {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const ethAddress = accounts[0];
        const response = await axios.post('/api/auth/loginWithWeb3', { ethAddress });
        localStorage.setItem('token', response.data.token);
        window.location.replace('/dashboard');
      } catch (error) {
        console.log('Web3 login failed:', error);
        setError('Web3 login failed');
      }
    } else {
      setError('Please install MetaMask or Trust Wallet to use Web3 login.');
    }
  };



  return (
<MDBContainer fluid className="p-3 my-5">
      <MDBRow>
        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
        </MDBCol>
        <MDBCol col='4' md='6'>
          <form onSubmit={handleLogin}>
            <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" value={email} onChange={(e) => setEmail(e.target.value)} />
            <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <Link to="/forget-password">Forgot password?</Link>           
                </div>
            <MDBBtn className="mb-4 w-100" size="sm" type="submit">Sign in</MDBBtn>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <MDBBtn className="mb-4 w-100" size="sm" style={{ backgroundColor: '#FF7F50	' }} onClick={handleWeb3Login}>
            <MDBIcon fab icon="ethereum" className="mx-2" />
            Continue with Ethereum
          </MDBBtn>
          <div className="text-center">
  <p>Don't have an account? <a href="/register">Sign up</a></p>
</div>
        </MDBCol>
        
      </MDBRow>
      
    </MDBContainer>




    // <div>
    //   <h2>Login</h2>
    //   <form onSubmit={handleLogin}>
    //     <input
    //       type="email"
    //       placeholder="Email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <input
    //       type="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <button type="submit">Login</button>
    //   </form>
    //   {error && <p style={{ color: 'red' }}>{error}</p>}
    //   <button onClick={handleWeb3Login}>Login with Ethereum Wallet</button>
    // </div>
  );
};

export default LoginForm;
