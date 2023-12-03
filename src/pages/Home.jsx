import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TimeLine from '../components/TimeLine';

const Home = () => {
  return (
    <>
      <div>
        <Link to="/signup" className='mr-2'>新規登録へ</Link>
        <Link to="/login">ログインへ</Link>
      </div>

      <div className='homeContainer'>
        <Sidebar />
        <TimeLine />
      </div>
    </>


  )
}

export default Home