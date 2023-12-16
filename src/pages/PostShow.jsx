import React from 'react'
import Sidebar from '../components/Sidebar'
import { IoIosArrowRoundBack } from "react-icons/io";

import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

import { CiImageOn } from "react-icons/ci";
import { Link } from 'react-router-dom';
import CommentModal from '../components/modal/CommentModal';
import { isCommentState } from '../atoms/isCommentState';
import { useRecoilState } from 'recoil';



const PostShow = () => {
  const [isComment, setIsComment] = useRecoilState(isCommentState);

  const handleClickComment = () => {
    setIsComment(!isComment);
  }

  return (
    <div className='followPage'>
      <Sidebar />
      {isComment && (<CommentModal />)}
      <div className='followContainer'>
        <div className='postShowWrapper'>
          <div className='postShowHeader'>
            <Link to="/">
              <IoIosArrowRoundBack size={40} />
            </Link>
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
              <button onClick={handleClickComment} disabled={isComment}>
                <FaRegComment className='postIconIcon' />
              </button>
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

        </div> {/* postShowWrapperの終わり  */}
        <div className="commentPostWrapper">
          <div className='commentPostInfo'>
            <img src="assets/person/minyon.jpeg" alt="" />
            <div>
              <div className='flex items-center'>
                <h3>パクミニョン</h3>
                <p>@minyon01</p>
              </div>
              <p>ありがとうございます。</p>
            </div>
          </div>
          <div className='flex'>
            <FaRegComment className='commentToCommentIcon' />
            <span className='commentToCommentIconNumber'>2</span>
          </div>
        </div>
        <div className="commentPostWrapper">
          <div className='commentPostInfo'>
            <img src="assets/person/minyon.jpeg" alt="" />
            <div>
              <div className='flex items-center'>
                <h3>パクミニョン</h3>
                <p>@minyon01</p>
              </div>
              <p>ありがとうございます。</p>
            </div>
          </div>
          <div className='flex'>
            <FaRegComment className='commentToCommentIcon' />
            <span className='commentToCommentIconNumber'>2</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PostShow
