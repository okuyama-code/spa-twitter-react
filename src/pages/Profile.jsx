import React, { useState } from 'react'

import Sidebar from '../components/Sidebar';
import { FaLink } from "react-icons/fa6";
import { FaBirthdayCake } from "react-icons/fa";
import EditModal from '../components/modal/EditModal';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import PostAll from '../components/profilePosts/PostAll';
import CommentAll from '../components/profilePosts/CommentAll';
import { Link } from 'react-router-dom';

// import { useRecoilState } from 'recoil';
// import { isEditState } from '../atoms/isEditState';



const Profile = () => {

  const [isEdit, setIsEdit] = useState(false);
  // const [isEdit, setIsEdit] = useRecoilState(isEditState)

  const handleClick = () => {
    setIsEdit(!isEdit);
  }

  return (
    <>
      <div className="profile">
        <Sidebar />
        {isEdit && (<EditModal isEdit={isEdit} handleClick={handleClick} />)}
        <div className='profileRight'>

          <div className="profileCover">
            <img src="assets/post/minyon3.jpeg" alt="" className='profileCoverImg'/>
            <img src="assets/person/icon.png" alt="" className='profileUserImg'/>
            <button className='profileEditButton' onClick={handleClick}>Edit Profile</button>
            {/* followボタンはここ */}
            {/* <button className='profilefollowButton'>follow</button>
            <button className='profileUnfollowButton'>follow解除</button> */}
            {/* ここまで */}
          </div>

          <div className="profileInfo">
              <h4 className='profileInfoName'>Okuyama</h4>
              <p className='profileInfoUsername'>@okuyama0121</p>
              <span className='profileInfoDesc'>千葉県在住。25歳。フッ軽です🏃23/3~8/8まで独学(500h)。23/8/9~HC。英語も学習中。ゴルフ、筋トレ、ランニング、ママさんバレー、将棋、カラオケ、登山、BBQ、フットサル。</span>

            <div className='profile_icons'>
              <div className='profile_icon'>
                <FaLink />
                <span>https://www.aaa.com</span>
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
      </div>
    </>
  )
}

export default Profile
