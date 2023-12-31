import React from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'

const Messages = () => {
  return (
    <div className='followPage x_scroll_none'>
      <Sidebar />
      <div className='followContainer'>
        {/* ============= DMの文章部分 ==================  */}
        <div class="message_header">
          <h2>Messages</h2>
        </div>

        <div className='messages_lists'>
          <div className='messages_list'>
            <div className='flex items-center'>
              <Link to={{ pathname: "/profile" }}>
              <img src="assets/person/iu01.jpeg" alt="" className='messages_icon' />
              </Link>
              <Link to={{ pathname: "/messageBox" }}>
              <div>
                <div className='messages_name'>
                  <h2>UI</h2>
                  <p>@ui01</p>
                  <p>・Nov 20</p>
                </div>
                <p className='messages_page_body'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              </div>
              </Link>
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
          </div>
        </div>

      </div>
    </div>
  )
}

export default Messages
