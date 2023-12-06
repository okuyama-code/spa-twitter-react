import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TimeLine from '../components/timeLine/TimeLine';
import EditModal from '../components/modal/EditModal';


const Home = () => {
  return (
    <div >
      <div className='homeContainer'>
        <Sidebar />
        <TimeLine />
      </div>
    </div>


  )
}

export default Home
