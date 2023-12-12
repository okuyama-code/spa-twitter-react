import React from 'react'
import Sidebar from '../components/Sidebar'
import { IoIosArrowRoundBack } from "react-icons/io";

import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

import { CiImageOn } from "react-icons/ci";




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
          <img src="assets/post/cotucotu.jpeg" alt="" className='postShowImg' />
          <div className="postShowIcons mt-4">
            <div className="PostIcon ">
              <FaRegComment className='postIconIcon' />
              <span className="IconCount">2</span>
            </div>
            <div className="PostIcon">
              <AiOutlineRetweet className='postIconIcon' />
              <span className="IconCount">2</span>
            </div>
            <div className="PostIcon">
                <CiHeart className='postIconIcon' />
                <span className='IconCount'>2</span>
            </div>
            <div className="PostIcon">
              <CiBookmark className='postIconIcon' />
              <span className="IconCount">2</span>
            </div>
          </div> {/* postShowIconsの終わり */}

          <form className='postShowCommentForm'>
            <div className='flex items-center'>
              <img src="assets/person/icon.png" alt="" className='postShowCommentFormImg' />
              <input type="text" className='postShowCommentFormInput' />
            </div>
            <div className='flex items-center justify-between ml-15 mr-5'>
              <CiImageOn size={25} className='postShowCommentFormIcon' />
              <button className='postShowCommentFormButton'>返信</button>
            </div>
          </form>

          <div className='commentPostInfo'>
            
          </div>

        </div> {/* postShowWrapperの終わり  */}
      </div>
    </div>
  )
}

export default PostShow
