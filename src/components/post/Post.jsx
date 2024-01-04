import React, { useEffect, useState } from 'react'
import "./Post.scss";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { isCommentState } from '../../atoms/isCommentState';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userListState } from '../../atoms/userListState';
import CommentModal from '../modal/CommentModal';




const Post = ({ post }) => {

  // Usersは配列なので一つ一つfilterで取り出す必要がある。
  // const user = Users.filter((user) => user.id === 1 );

  console.log(post);

  const [isComment, setIsComment] = useRecoilState(isCommentState);
  const users = useRecoilValue(userListState);


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
        {/* TODO 最後にわたってきたpostが渡ってしまう */}
      {/* {isComment && (<CommentModal post={post}  />)} */}

      {/* TODO コンポーネントに分けないで試してみる */}
      {/* {isComment && (
        <div className='comment_modal'>
          <div className='comment_modal_header'>
            <button onClick={modalClose}>
              <IoMdClose className='close_icon' />
            </button>
          </div>

          <div className='comment_modal_post'>
            <img src={users.filter((user) => user.id === post.user_id)[0].icon_url} alt="" />
            <div className='ml-3'>
              <div className='flex'>
                <h3>{users.filter((user) => user.id === post.user_id)[0].name}</h3>
                <p className='comment_modal_post_username'>@{users.filter((user) => user.id === post.user_id)[0].username}</p>
              </div>
              <h3>{post.post_content}</h3>
              <p className='replying_to'>Replying to <span>@{users.filter((user) => user.id === post.user_id)[0].username}</span></p>
            </div>
          </div>
          <div className='comment_form'>
            <img src={currentUser.icon_url} alt="" />
            <form>
              <textarea name="" id="" cols="60" rows="5" placeholder='Post your reply'></textarea>
              <div className='flex items-center justify-between mx-4'>
                <CiImageOn className='img_icon'/>
                <button>返信</button>
              </div>
            </form>

          </div>
        </div>)
        } */}


        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <Link to={`/users/${users.filter((user) => user.id === post.user_id)[0].id}`}>
                <img src={users.filter((user) => user.id === post.user_id)[0].icon_url} alt="" className='postProfileImg' />
              </Link>
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
