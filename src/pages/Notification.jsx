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

  // PR修正
  const NOTIFICATION_TEXT = {
    "like": "さんの投稿にいいねをしました",
    "follow": "さんをフォローしました",
    "comment": "さんの投稿にコメントしました",
  }

  const findUserByUserId = (userId) => {
    const user = users.find((user) => user.id == userId)
    if (user) return user.name
    return ""
  }


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

            {/* <h3>{users.filter((user) => user.id == notification.visitor_id)[0].name}さんが{users.filter((user) => user.id == notification.visited_id)[0].name}{NOTIFICATION_TEXT[notification.action]}</h3> */}
            <h3>{findUserByUserId(notification.visitor_id)}さんが{findUserByUserId(notification.visited_id)}{NOTIFICATION_TEXT[notification.action]}</h3>
          </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Notification
