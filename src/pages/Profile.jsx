import React, { useEffect, useState } from 'react'

import Sidebar from '../components/Sidebar';
import { FaLink } from "react-icons/fa6";
import { FaBirthdayCake } from "react-icons/fa";
import EditModal from '../components/modal/EditModal';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import PostAll from '../components/profilePosts/PostAll';
import CommentAll from '../components/profilePosts/CommentAll';
import Page404 from './Page404';
import { Link, useParams } from 'react-router-dom';

import { useRecoilState, useRecoilValue } from 'recoil';
import { isEditState } from '../atoms/isEditState';
import { isLoginState } from '../atoms/isLoginState';
import { fetchUser } from '../lib/api/user';
import { CircularProgress } from '@mui/material';



const Profile = () => {
  const isLogin = useRecoilValue(isLoginState);
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  const [user, setUser] = useState(null);

  const { id } = useParams();


  // ここでfetchUserをする。
  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await fetchUser(id);
        console.log(res.data.user)
        setUser(res.data.user);
      } catch (e) {
        console.log("エラーが発生しました", e)
      }
    }
    loadUser();
  }, [id])

  const handleClick = () => {
    setIsEdit(!isEdit);
  }

  if (!isLogin) return <Page404 />

  return (
    <>
      {user ? (<div className="profile">
        <Sidebar />
        {isEdit && (<EditModal user={user} handleClick={handleClick} />)}
        <div className='profileRight'>
          <div className="profileCover">
            <img src={user.header_url} alt="" className='profileCoverImg'/>
            <img src={user.icon_url} alt="" className='profileUserImg'/>
            <button className='profileEditButton' onClick={handleClick} disabled={isEdit}>Edit Profile</button>
            {/* followボタンはここ */}
            {/* <button className='profilefollowButton'>follow</button>
            <button className='profileUnfollowButton'>follow解除</button> */}
            {/* ここまで */}
          </div>

          <div className="profileInfo">
              <h4 className='profileInfoName'>{user.name}</h4>
              <p className='profileInfoUsername'>@{user.username}</p>
              <span className='profileInfoDesc'>千葉県在住。25歳。フッ軽です🏃23/3~8/8まで独学(500h)。23/8/9~HC。英語も学習中。ゴルフ、筋トレ、ランニング、ママさんバレー、将棋、カラオケ、登山、BBQ、フットサル。</span>

            <div className='profile_icons'>
              <div className='profile_icon'>
                <FaLink />
                <span className='profile_icon_link'><a  href='https://okucode-portfolio-site.vercel.app/' rel="noopener noreferrer" target="_blank" >https://okucode-portfolio-site.vercel.app/</a></span>
              </div>
              <div className='profile_icon2'>
                <FaBirthdayCake />
                <span>Born January 21, 1998</span>
              </div>
            </div>
              <div className='profile_icon3'>
              <FaBirthdayCake />
              <span>Born January 21, 1998</span>
            </div>

            <div className='follow_profile'>
              <p><Link to={{ pathname: "/followings" }}><span>110</span></Link> Following</p>
              <p><Link to={{ pathname: "/followings" }}><span>100</span></Link> Follower</p>
            </div>
            <div className='profile_tabs'>
              <Tabs>
                <TabList className="tablist">
                  <Tab><h2>投稿一覧</h2></Tab>
                  <Tab><h2>コメント一覧</h2></Tab>
                </TabList>

                <TabPanel className="tabPanel">
                  <PostAll />
                </TabPanel>
                <TabPanel>
                  <CommentAll />
                </TabPanel>

              </Tabs>
            </div>

          </div>
        </div>
      </div>)
      : (<div className='loading'><CircularProgress color="inherit" /></div>)}
    </>
  )
}

export default Profile
