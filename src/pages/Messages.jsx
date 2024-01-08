import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
import { fetchGroups } from '../lib/api/others'
import useUserList from '../hooks/useUserList';


const Messages = () => {

  const { users } = useUserList();
  const [another_entries, setAnother_entries] = useState(null);


  useEffect(() => {
    async function loadGroups() {
      try {
        const res = await fetchGroups();
        console.log(res.data);
        console.log(res.data.another_entries);
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
                  <Link to={{ pathname: "/profile" }}>
                  <img src="assets/person/iu01.jpeg" alt="" className='messages_icon' />
                  </Link>
                  <Link to={{ pathname: "/messageBox" }}>
                  <div>
                    <div className='messages_name'>
                      <h2>{users.filter((user) => user.id == another_entriy.user_id)[0].name}</h2>
                      <p>@{users.filter((user) => user.id == another_entriy.user_id)[0].username}</p>
                    </div>
                    {/* TODO showページに移動　メッセージのMessage.lastを表示させる */}
                    <p className='messages_page_body'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                  </div>
                  </Link>
                </div>
              </div>

              {/* <div className='messages_list'>
                <div className='flex items-center'>
                  <img src="assets/person/iu01.jpeg" alt="" className='messages_icon' />
                  <div>
                    <div className='messages_name'>
                      <h2>UI</h2>
                      <p>@ui01</p>
                      <p>・Nov 20</p>
                    </div>
                    <p className='messages_page_body'>aaaaaaaaaaaaaaaaaaaaaaaa</p>
                  </div>
                </div>
              </div>
              <div className='messages_list'>
                <div className='flex items-center'>
                  <img src="assets/person/iu01.jpeg" alt="" className='messages_icon' />
                  <div>
                    <div className='messages_name'>
                      <h2>UI</h2>
                      <p>@ui01</p>
                      <p>・Nov 20</p>
                    </div>
                    <p className='messages_page_body'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                  </div>
                </div>
              </div>
              <div className='messages_list'>
                <div className='flex items-center'>
                  <img src="assets/person/iu01.jpeg" alt="" className='messages_icon' />
                  <div>
                    <div className='messages_name'>
                      <h2>UI</h2>
                      <p>@ui01</p>
                      <p>・Nov 20</p>
                    </div>
                    <p className='messages_page_body'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                  </div>
                </div>
              </div> */}
              </div>
            ))}
          </div>

        )}


          {/* <div className='messages_list'>
            <div className='flex items-center'>
              <img src="assets/person/iu01.jpeg" alt="" className='messages_icon' />
              <div>
                <div className='messages_name'>
                  <h2>UI</h2>
                  <p>@ui01</p>
                  <p>・Nov 20</p>
                </div>
                <p className='messages_page_body'>aaaaaaaaaaaaaaaaaaaaaaaa</p>
              </div>
            </div>
          </div>
          <div className='messages_list'>
            <div className='flex items-center'>
              <img src="assets/person/iu01.jpeg" alt="" className='messages_icon' />
              <div>
                <div className='messages_name'>
                  <h2>UI</h2>
                  <p>@ui01</p>
                  <p>・Nov 20</p>
                </div>
                <p className='messages_page_body'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              </div>
            </div>
          </div>
          <div className='messages_list'>
            <div className='flex items-center'>
              <img src="assets/person/iu01.jpeg" alt="" className='messages_icon' />
              <div>
                <div className='messages_name'>
                  <h2>UI</h2>
                  <p>@ui01</p>
                  <p>・Nov 20</p>
                </div>
                <p className='messages_page_body'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              </div>
            </div>
          </div> */}

      </div>
    </div>
  )
}

export default Messages
