import React from 'react';
import { Route , Routes } from 'react-router-dom';
import Start from './pages/start';
import UserSignup from './pages/UserSignup';
import UserLogin from './pages/UserLogin';
import CaptainSignup from './pages/CaptainSignup';
import CaptainLogin from './pages/CaptainLogin';
import Home from './pages/Home';



const app = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/User-Signup" element={<UserSignup />} />
        <Route path="/User-Login" element={<UserLogin />} />
        <Route path="/Captain-Signup" element={<CaptainSignup />} />
        <Route path="/Captain-Login" element={<CaptainLogin />} />
        <Route path='/Home' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default app;