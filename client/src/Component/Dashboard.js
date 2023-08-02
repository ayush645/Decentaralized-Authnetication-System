// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
} from 'mdb-react-ui-kit'; 
const Dashboard = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const handleLogout = async () => {
    try {
      await axios.put('/api/auth/logout');
      // Clear the JWT token from local storage
      localStorage.removeItem('token');
      // Redirect to the login page
      window.location.replace('/login');
    } catch (error) {
      console.log('Logout failed: ', error);
    }
  };


  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/auth/${user._id}`, {
        email: email,
        password: password,
      });
      setUser(response.data);
      setError('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log('Update failed: ', error.response.data);
      setError(error.response.data.error);
    }
  };
  const handleOpenUpdateForm = () => {
    setShowUpdateForm(true);
  };

  useEffect(() => {
    // Fetch user data from the backend using the JWT token
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/auth/current');
        setUser(response.data);
      } catch (error) {
        console.log('Error fetching user data: ', error);
      }
    };

    fetchUserData();
  }, []);

  return (

        
    <MDBContainer fluid className="p-3 my-5">
    <MDBRow>
      <MDBCol col='10' md='6'>

              <img src="/meta.gif" className="img-fluid" alt="Phone image" style={{ width: '500px', height: '500px' }} />

      </MDBCol>
      <MDBCol col='4' md='6'>
      <h2>Welcome, {user.email}!</h2>

      <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
      Ethereum is a decentralized blockchain platform that enables the creation and execution of smart contracts and decentralized applications (dApps). It was proposed by Vitalik Buterin in late 2013 and officially launched in July 2015. Unlike traditional centralized systems, Ethereum relies on a network of nodes to validate and process transactions, making it secure, transparent, and censorship-resistant.

Ethereum's native cryptocurrency is called Ether (ETH), which is used to pay for transaction fees and incentivize miners to secure the network. Ether also serves as a store of value and can be traded on various cryptocurrency exchanges.</p>

         
      {showUpdateForm ? (
      <form onSubmit={handleUpdate}>

        <form onSubmit={handleUpdate}>
        <input
          type="email"
          placeholder="New Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <MDBBtn type="submit"  >Update /</MDBBtn>
      </form>
      </form>
    ) : (
      <MDBBtn onClick={handleOpenUpdateForm} className='lign-self-end'>Update Profile</MDBBtn>
    )}
         <MDBBtn onClick={handleLogout} style={{ right:'-48px' }} >Logout</MDBBtn>

      </MDBCol>
    </MDBRow>
  </MDBContainer>




    




  );
};

export default Dashboard;
