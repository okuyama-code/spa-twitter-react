import React, { useState } from 'react'

import Sidebar from '../components/Sidebar';
import { FaLink } from "react-icons/fa6";
import { FaBirthdayCake } from "react-icons/fa";
import EditModal from '../components/modal/EditModal';



const Profile = () => {

  const [isEdit, setIsEdit] = useState(false);

  const handleClick = () => {
    setIsEdit(!isEdit);
  }

  return (
    <>
      <div className="profile">
        <Sidebar />
        <div className='profileRight'>
          <div className="profileCover">
            <img src="assets/post/minyon3.jpeg" alt="" className='profileCoverImg'/>
            <img src="assets/person/icon.png" alt="" className='profileUserImg'/>
            <button className='profileEditButton' onClick={handleClick}>Edit Profile</button>
          </div>

          <div className="profileInfo">
              <h4 className='profileInfoName'>Okuyama</h4>
              <p className='profileInfoUsername'>@okuyama0121</p>
              <span className='profileInfoDesc'>千葉県在住。25歳。フッ軽です🏃23/3~8/8まで独学(500h)。23/8/9~HC。英語も学習中。ゴルフ、筋トレ、ランニング、ママさんバレー、将棋、カラオケ、登山、BBQ、フットサル。「努力の上の辛抱という棒を立てろ、この棒に花が咲く」 「常に自惚れず冷静に視座高く」「迷ったら、やる」</span>

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
              <p><span>110</span> Following</p>
              <p><span>100</span> Follower</p>

            </div>

            {isEdit && (<EditModal />)}


          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
