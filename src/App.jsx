import './App.scss';
import React from 'react'

import { BrowserRouter,  Route, Routes } from 'react-router-dom'

import { RecoilRoot } from 'recoil';
import Login from './pages/Login';
import Follow from './pages/Follow';
import Home from './pages/Home';

import Notification from './pages/Notification';
import PostShow from './pages/PostShow';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Page404 from './pages/Page404';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GroupDetail from './pages/GroupDetail';
import Groups from './pages/Groups';

function App() {

<Home />
  return (
    <RecoilRoot>
      <ToastContainer
        position="top-center"
        // theme="dark"
      />

      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="home" element={<Home />} />
          <Route path="/users/:id" element={<Profile />} />
          <Route path="followings" element={<Follow />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/groups/:id" element={<GroupDetail />} />
          <Route path="notifications" element={<Notification
          />} />
          <Route path="/posts/:id" element={<PostShow
          />} />
          <Route path="*" element={<Page404
          />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App;
