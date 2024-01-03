import React from 'react'
import Sidebar from '../components/Sidebar';
import TimeLine from '../components/timeLine/TimeLine';

import CommentModal from '../components/modal/CommentModal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isCommentState } from '../atoms/isCommentState';
import useUserList from '../hooks/useUserList';
import useCurrentUser from '../hooks/useCurrentUser';
import { currentUserState } from '../atoms/currentUserState';



const Home = () => {
  const isComment = useRecoilValue(isCommentState);
  const currentUser = useRecoilValue(currentUserState);
  useUserList();
  useCurrentUser();
  console.log(currentUser)


  return (
    <div>
      <div className='homeContainer'>
        {/* {currentUser.name}
        {currentUser.email}
        {currentUser.email} */}
        <Sidebar />
        <TimeLine />
        {isComment && (<CommentModal />)}
      </div>
    </div>
  )
}

export default Home
