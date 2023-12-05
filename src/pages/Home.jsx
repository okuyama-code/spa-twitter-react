import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TimeLine from '../components/timeLine/TimeLine';
import Modal from '../components/modal/Modal';


const Home = () => {
  return (
    <div >
      <div>
        <Link to="/signup" className='mr-2'>新規登録へ</Link>
        <Link to="/login">ログインへ</Link>
      </div>

      <div className='homeContainer'>
        <Sidebar />
        {/* <TimeLine /> */}
        <Modal />
      </div>
    </div>


  )
}

export default Home
