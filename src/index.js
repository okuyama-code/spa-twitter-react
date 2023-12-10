import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Follow from './pages/Follow';
import Notification from './pages/Notification';
import MessageBox from './pages/MessageBox';
import Messages from './pages/Messages';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="signUp" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="followings" element={<Follow />} />
        <Route path="messages" element={<Messages />} />
        <Route path="messagebox" element={<MessageBox />} />
        <Route path="notifications" element={<Notification
         />} />

      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);


