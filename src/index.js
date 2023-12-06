import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Followings from './pages/Followings';
import Followers from './pages/Followers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="signUp" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="followings" element={<Followings />} />
        <Route path="followers" element={<Followers />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);


