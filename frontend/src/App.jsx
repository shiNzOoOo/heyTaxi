import React from 'react';
import { Route , Routes } from 'react-router-dom';
import Home from './pages/home';
import UserSignup from './pages/UserSignup';
import UserLogin from './pages/UserLogin';
import CaptainSignup from './pages/CaptainSignup';
import CaptainLogin from './pages/CaptainLogin';


const app = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/User-Signup" element={<UserSignup />} />
        <Route path="/User-Login" element={<UserLogin />} />
        <Route path="/Captain-Signup" element={<CaptainSignup />} />
        <Route path="/Captain-Login" element={<CaptainLogin />} />
      </Routes>
    </div>
  );
}

export default app;