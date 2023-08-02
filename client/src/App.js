// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LoginForm from './Component/LoginForm';
import RegisterForm from './Component/RegisterForm';
import Dashboard from './Component/Dashboard';
import ProtectedRoute from './Component/ProtectedRoute';
import ForgotPassword from './Component/ForgotPassword';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
        <Route exact path='/' element={< LoginForm />}></Route>  

        <Route exact path='/login' element={< LoginForm />}></Route>  
        <Route exact path='/register' element={< RegisterForm />}></Route>  
        {/* <Route exact path='/dashboard' element={< Dashboard />}></Route>   */}
        <Route exact path="/dashboard" element={<ProtectedRoute />} />
        <Route exact path="/forget-password" element={<ForgotPassword />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
