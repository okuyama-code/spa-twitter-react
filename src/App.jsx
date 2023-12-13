import './App.scss';
import React, { useEffect } from 'react'

import { BrowserRouter,  Route, Routes, useNavigate } from 'react-router-dom'

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
import { getUser } from './lib/api/auth';

function App() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const f = async () => {
  //     try {
  //       const res = await getUser();
  //       console.log(res);
  //       if (res.data.isLogin) {
  //         navigate("/");
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   f();
  // }, [navigate]);

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="followings" element={<Follow />} />
          <Route path="messages" element={<Messages />} />
          <Route path="messagebox" element={<MessageBox />} />
          <Route path="notifications" element={<Notification
          />} />
          <Route path="postShow" element={<PostShow
          />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App;
