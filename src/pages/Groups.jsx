import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
import { fetchGroups } from '../lib/api/others'
import useUserList from '../hooks/useUserList';


const Groups = () => {

  const { users } = useUserList();
  const [another_entries, setAnother_entries] = useState(null);


  useEffect(() => {
    async function loadGroups() {
      try {
        const res = await fetchGroups();
        setAnother_entries(res.data.another_entries)
      } catch (e) {
        console.log(e);
      }
    }
    loadGroups();
  }, [])

  return (
    <div className='followPage x_scroll_none'>
      <Sidebar />
      <div className='followContainer'>
        {/* ============= DMの文章部分 ==================  */}
        <div class="message_header">
          <h2>Messages</h2>
        </div>

        {another_entries && (
          <div>
            {another_entries.map((another_entriy) => (

              <div className='messages_lists'>
              <div className='messages_list'>
                <div className='flex items-center'>
                  <Link to={{ pathname: `/users/${another_entriy.user_id}` }}>
                  <img src={users.filter((user) => user.id == another_entriy.user_id)[0].icon_url} alt="" className='messages_icon' />
                  </Link>
                  <Link to={{ pathname: `/groups/${another_entriy.group_id}` }}>
                  <div>
                    <div className='messages_name'>
                      <h2>{users.filter((user) => user.id == another_entriy.user_id)[0].name}</h2>
                      <p>@{users.filter((user) => user.id == another_entriy.user_id)[0].username}</p>
                    </div>
                   
                  </div>
                  </Link>
                </div>
              </div>


              </div>
            ))}
          </div>

        )}




      </div>
    </div>
  )
}

export default Groups
