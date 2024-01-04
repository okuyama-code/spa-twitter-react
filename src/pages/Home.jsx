import React from 'react'
import Sidebar from '../components/Sidebar';
import TimeLine from '../components/timeLine/TimeLine';

import useUserList from '../hooks/useUserList';




const Home = () => {
  useUserList();

  return (
    <div>
      <div className='homeContainer'>
        <Sidebar />
        <TimeLine />
      </div>
    </div>
  )
}

export default Home
