import React from 'react'
import Sidebar from '../components/Sidebar';
import TimeLine from '../components/timeLine/TimeLine';

import CommentModal from '../components/modal/CommentModal';
import { useRecoilValue } from 'recoil';
import { isCommentState } from '../atoms/isCommentState';

import { isLoginState } from '../atoms/isLoginState';
import Login from './Login';


const Home = () => {
  const isLogin = useRecoilValue(isLoginState);
  const isComment = useRecoilValue(isCommentState);

  return (
    <div >
      {isLogin ? (<div className='homeContainer'>
        <Sidebar />
        <TimeLine />
        {isComment && (<CommentModal />)}
      </div>) : <Login /> }


    </div>


  )
}

export default Home
