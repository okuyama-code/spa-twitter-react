import React from 'react'
import Sidebar from '../components/Sidebar'

const Notification = () => {
  return (
    <div className='followPage'>
      <Sidebar />
      <div className='followContainer'>
        <div className='notification_box'>
          <img src="assets/person/iu01.jpeg" alt="" />
          <h3>IUさんがあなたの投稿にいいねをしました</h3>
        </div>
        <div className='notification_box'>
          <img src="assets/person/iu01.jpeg" alt="" />
          <h3>IUさんがあなたの投稿をリポストしました</h3>
        </div>
        <div className='notification_box'>
          <img src="assets/person/iu01.jpeg" alt="" />
          <h3>IUさんがあなたの投稿にコメントをしました</h3>
          <p>感動しました！</p>
        </div>

        <div className='notification_box'>
          <img src="assets/person/iu01.jpeg" alt="" />
          <h3>IUさんがあなたをフォローしました</h3>
        </div>
      </div>
    </div>
  )
}

export default Notification
