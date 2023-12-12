import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import TimeLine from '../components/timeLine/TimeLine';

import CommentModal from '../components/modal/CommentModal';


const Home = () => {
  const [isComment, setIsComment] = useState(false);
  const handleClickComment = () => {
    setIsComment(!isComment);
  }

  return (
    <div >
      <div className='homeContainer'>
        <Sidebar />
        <TimeLine  isComment={isComment} handleClickComment={handleClickComment} />
        {/* <CommentModal isComment={isComment} handleClickComment={handleClickComment}/> */}
      </div>
    </div>


  )
}

export default Home
