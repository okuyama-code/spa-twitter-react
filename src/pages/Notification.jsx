import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import useCurrentUser from '../hooks/useCurrentUser'
import { fetchNotifications } from '../lib/api/others';
import useUserList from '../hooks/useUserList';
import { Link } from 'react-router-dom';

const Notification = () => {
  const { currentUser } = useCurrentUser();
  const [notifications, setNotifications] = useState()
  const { users } = useUserList();
  // console.log(users)

  useEffect(() => {
    async function loadNotifications() {
      try {
        const res = await fetchNotifications();
        // console.log(res)
        console.log(res.data.notifications)
        setNotifications(res.data.notifications)
      } catch (e) {
        console.log(e);
      }
    }
    loadNotifications();
  }, [])


  return (
    <div className='followPage'>
      <Sidebar />
      {notifications && (
        <div className='followContainer'>
          {notifications.map((notification) => (
            <div className='notification_box'>
            {users && (
              <Link to={`/users/${notification.visitor_id}`}>
                <img src={users.filter((user) => user.id == notification.visitor_id)[0].icon_url}  alt="" />
              </Link>
            )}
            {users && (
              <Link to={`/users/${notification.visited_id}`}>
                <img src={users.filter((user) => user.id == notification.visited_id)[0].icon_url}  alt="" />
              </Link>
            )}
            {notification.action == "like" && (

              <h3>{users.filter((user) => user.id == notification.visitor_id)[0].name}さんが{users.filter((user) => user.id == notification.visited_id)[0].name}さんの投稿にいいねをしました</h3>
            )}
            {notification.action == "follow" && (

              <h3>{users.filter((user) => user.id == notification.visitor_id)[0].name}さんが{users.filter((user) => user.id == notification.visited_id)[0].name}さんをフォローしました</h3>
            )}
            {notification.action == "comment" && (

              <h3>{users.filter((user) => user.id == notification.visitor_id)[0].name}さんが{users.filter((user) => user.id == notification.visited_id)[0].name}さんの投稿にコメントしました</h3>
            )}
          </div>
          ))}
        </div>
      )}



        {/* <div className='notification_box'>
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
        </div> */}
    </div>
  )
}

export default Notification
