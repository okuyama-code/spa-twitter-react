import React, { useEffect, useState } from 'react'
import "./Post.scss";
import { Users } from "../../dummyData";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { isCommentState } from '../../atoms/isCommentState';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userListState } from '../../atoms/userListState';
import { getUsers } from '../../lib/api/post';




const Post = ({ post }) => {
  // Usersは配列なので一つ一つfilterで取り出す必要がある。
  // const user = Users.filter((user) => user.id === 1 );

  const [isComment, setIsComment] = useRecoilState(isCommentState);
  const [users, setUsers] = useRecoilState(userListState);


  const handleClickComment = () => {
    setIsComment(!isComment);
  }


  const handleToDate = (date) => {
    date = new Date(date);
    if (date.getMinutes() < 10) {
      date = date.getFullYear() + "/" + (date.getMonth() % 12 + 1) + "/" + date.getDate() + " " + date.getHours() + ":0" + date.getMinutes()
    } else {
      date = date.getFullYear() + "/" + (date.getMonth() % 12 + 1) + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes()
    }
    return date;
  }

  return (
    <>
      <div className='post'>
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img src={users.filter((user) => user.id === post.user_id)[0].icon_url} alt="" className='postProfileImg' />
              <span className='postName text-xl font-bold'>
                {users.filter((user) => user.id === post.user_id)[0].name}
              </span>
              <span className="postUsername">
                @{users.filter((user) => user.id === post.user_id)[0].username}
              </span>
              <span className="postDate">{handleToDate(post.created_at)}</span>
            </div>
          </div>
        </div>
        <Link to={`/posts/${post.id}`}>
          <div className="postCenter">
            <p className="postText">{post.post_content}</p>
            <img src={post.image_url} className='postImg' />
          </div>
        </Link>
        <div className="postIcons">
          <div className="PostIcon">
            <button onClick={handleClickComment} disabled={isComment}>
              <FaRegComment className='postIconIcon' />
            </button>
            <span className="IconCount">{post.comment}</span>
          </div>
          <div className="PostIcon">
            <AiOutlineRetweet className='postIconIcon' />
            <span className="IconCount">{post.comment}</span>
          </div>
          <div className="PostIcon">
            <CiHeart className='postIconIcon' />
            <span className='IconCount'>{post.like}</span>
          </div>
          <div className="PostIcon">
            <CiBookmark className='postIconIcon' />
            <span className="IconCount">{post.comment}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post
