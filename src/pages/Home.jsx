import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TimeLine from '../components/timeLine/TimeLine';

import CommentModal from '../components/modal/CommentModal';


const Home = () => {
  return (
    <div >
      <div className='homeContainer'>
        <Sidebar />
        <TimeLine />
        {/* <CommentModal /> */}
      </div>
    </div>


  )
}

export default Home
