import React from 'react'
import Sidebar from '../components/Sidebar'
import { IoIosArrowRoundBack } from "react-icons/io";



const PostShow = () => {
  return (
    <div className='followPage'>
      <Sidebar />
      <div className='followContainer'>
        <div className='postShowWrapper'>
          <div className='postShowHeader'>
            <IoIosArrowRoundBack size={40} />
            <h2>Post</h2>
          </div>
          <div className="postShowName">
            <img src="assets/person/icon.png" alt="" />
            <div>
              <h2>okuyama</h2>
              <p>@okuyama0121</p>
            </div>
          </div>
          <h3 className='postShowBody'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h3>

        </div> {/* postShowWrapperの終わり  */}
      </div>
    </div>
  )
}

export default PostShow
