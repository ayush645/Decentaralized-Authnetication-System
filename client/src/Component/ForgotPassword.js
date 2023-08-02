import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      // Call the API to request password reset link with the provided email
      const response = await axios.post('/api/account-recovery/recover', { email });
      setMessage(response.data.message);
      setError('');
    } catch (error) {
      console.log('Forgot Password failed: ', error.response.data);
      setMessage('');
      setError(error.response.data.error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h2 className="text-center">Forgot Password</h2>
          {message ? (
            <p className="alert alert-success">{message}</p>
          ) : (
            <form onSubmit={handleResetPassword}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Reset Password
              </button>
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
          )}
      <Link to="/login">Go back to login</Link> 

        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
