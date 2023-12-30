import React from 'react'
import Sidebar from '../components/Sidebar';
import TimeLine from '../components/timeLine/TimeLine';

import CommentModal from '../components/modal/CommentModal';
import { useRecoilValue } from 'recoil';
import { isCommentState } from '../atoms/isCommentState';

const Home = () => {
  const isComment = useRecoilValue(isCommentState);

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
