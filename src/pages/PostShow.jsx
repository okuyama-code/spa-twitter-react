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
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostShow
