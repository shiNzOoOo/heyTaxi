import React from 'react';
import { Route , Routes } from 'react-router-dom';
import Start from './pages/start';
import UserSignup from './pages/UserSignup';
import UserLogin from './pages/UserLogin';
import CaptainSignup from './pages/CaptainSignup';
import CaptainLogin from './pages/CaptainLogin';
import UserProtectedWrapper from './pages/UserProtectedWrapper';
import Home from './pages/home';
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome';
import CaptainProtectWrapper from './pages/CaptainProtectedWrapper';



const app = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/User-Signup" element={<UserSignup />} />
        <Route path="/User-Login" element={<UserLogin />} />
        <Route path="/Captain-Signup" element={<CaptainSignup />} />
        <Route path="/Captain-Login" element={<CaptainLogin />} />
        <Route path='/Home' element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
        } />
        <Route path="/user/logout" element={
          <UserProtectedWrapper>
            <UserLogout />
          </UserProtectedWrapper >
        } />
        <Route path='/Captain-home' element={
          <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>

        } />




      </Routes>
    </div>
  );
}

export default app;