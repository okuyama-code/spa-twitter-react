import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { IoIosArrowRoundBack } from "react-icons/io";

import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

import { CiImageOn } from "react-icons/ci";
import { Link, useParams } from 'react-router-dom';
import CommentModal from '../components/modal/CommentModal';
import { isCommentState } from '../atoms/isCommentState';
import { useRecoilState, useRecoilValue } from 'recoil';

import { fetchPost } from '../lib/api/post';
import { userListState } from '../atoms/userListState';
import { CircularProgress } from '@mui/material';
import { getUsers } from '../lib/api/user';
import { currentUserState } from '../atoms/currentUserState';
import useCurrentUser from '../hooks/useCurrentUser';





const PostShow = () => {
  const [isComment, setIsComment] = useRecoilState(isCommentState);

  const handleClickComment = () => {
    setIsComment(!isComment);
  }

  const [post, setPost] = useState(null);
  const { id } = useParams();

  const [users, setUsers] = useRecoilState(userListState);

  const { currentUser } = useCurrentUser();

  // const currentUser = useRecoilValue(currentUserState)

  useEffect(() => {
    const fetchCurrentPost = async () => {
      try {
        const res2 = await getUsers();
        const allUsers = res2.data.users;
        setUsers(allUsers)
        const res = await fetchPost(id);
        setPost(res.data);
      } catch (e) {
        console.log("エラーが発生しました", e)
      }
    }
    fetchCurrentPost();
  }, [id])

  if (!post) return <div className='loading'><CircularProgress color="inherit" /></div>


  return (
    <div className='followPage'>
      <Sidebar />
      {isComment && (<CommentModal post={post} id={id} />)}
      <div className='followContainer'>
        <div className='postShowWrapper'>
          <div className='postShowHeader'>
            <Link to="/home">
              <IoIosArrowRoundBack size={40} />
            </Link>
            <h2>Post</h2>
          </div>
          <div className="postShowName">
            <img src={users.filter((user) => user.id === post.user_id)[0].icon_url} />
            <div>
              <h2>{users.filter((user) => user.id === post.user_id)[0].name}</h2>
              <p>@{users.filter((user) => user.id === post.user_id)[0].username}</p>
            </div>
          </div>
          <h3 className='postShowBody'>{post.post_content}</h3>
          <img src={post.image_url} className='postImg' />
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
              <img src={currentUser.icon_url} alt="" className='postShowCommentFormImg' />
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
            <img src={currentUser.icon_url} alt="" />
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
            <img src="/assets/person/minyon.jpeg" alt="" />
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
