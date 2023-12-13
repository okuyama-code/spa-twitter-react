import './App.scss';
import React from 'react'

import { BrowserRouter,  Route, Routes } from 'react-router-dom'

import { RecoilRoot } from 'recoil';
import Login from './pages/Login';
import Follow from './pages/Follow';
import Home from './pages/Home';
import MessageBox from './pages/MessageBox';
import Messages from './pages/Messages';
import Notification from './pages/Notification';
import PostShow from './pages/PostShow';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Page404 from './pages/Page404';

function App() {


  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="followings" element={<Follow />} />
          <Route path="messages" element={<Messages />} />
          <Route path="messagebox" element={<MessageBox />} />
          <Route path="notifications" element={<Notification
          />} />
          <Route path="postShow" element={<PostShow
          />} />
          <Route path="*" element={<Page404
          />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App;
