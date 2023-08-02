// src/components/RegisterForm.js
import React, { useState } from 'react';
import axios from 'axios';
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
const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ethAddress, setEthAddress] = useState('');
  const [error, setError] = useState('');

  // Add any other required fields for registration

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/register', { email, password ,ethAddress  });
      // Store the JWT token in local storage
      localStorage.setItem('token', response.data.token);
      // Redirect to the dashboard page
      window.location.replace('/dashboard');
    } catch (error) {
      console.log('Registration failed: ', error.response.data);
      setError(error.response.data.error);

    }
  };

  const handleConnectWallet = async () => {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setEthAddress(accounts[0]);
      } catch (error) {
        console.log('Failed to connect wallet:', error.message);
        setError('Failed to connect wallet. Make sure you have MetaMask installed and unlocked.');
      }
    } else {
      setError('MetaMask extension not detected. Please install MetaMask to use Ethereum signup.');
    }
  };


  return (

    <MDBContainer fluid className="p-3 my-5">
      <MDBRow>
        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Phone image" />
        </MDBCol>
        <MDBCol col='4' md='6'>
          <form onSubmit={handleRegister}>
            <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" value={email} onChange={(e) => setEmail(e.target.value)} />
            <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                </div>
                <div>
            <MDBBtn type='button' color='primary' style={{ backgroundColor: '#FF7F50	' }} onClick={handleConnectWallet}>
              <MDBIcon fab icon='ethereum' className='mx-2' />
              Connect Ethereum Wallet
            </MDBBtn>
            </div>
                <MDBInput
              label='Ethereum Address'
              id='formControlLg'
              type='text'
              size='sm'
              value={ethAddress}
              onChange={(e) => setEthAddress(e.target.value)}
            />
             

            <MDBBtn className="mb-4 w-100" size="sm"  type="submit">Sign up</MDBBtn>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        
            
        
        </MDBCol>
      </MDBRow>
    </MDBContainer>




  );
};

export default RegisterForm;
