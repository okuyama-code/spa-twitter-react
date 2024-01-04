import React, { useEffect, useState } from 'react'
import "./Post.scss";
import { CiHeart, CiImageOn } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { isCommentState } from '../../atoms/isCommentState';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userListState } from '../../atoms/userListState';
import CommentModal from '../modal/CommentModal';
import { toast } from 'react-toastify';
import { createComment } from '../../lib/api/post';
import { currentUserState } from '../../atoms/currentUserState';
import { IoMdClose } from 'react-icons/io';



const Post = ({ post }) => {

  // Usersは配列なので一つ一つfilterで取り出す必要がある。
  // const user = Users.filter((user) => user.id === 1 );

  console.log(post);

  const [isComment, setIsComment] = useRecoilState(isCommentState);
  const users = useRecoilValue(userListState);




  const handleClickComment = () => {
    navigate(`/posts/${post.id}`)
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

  // commentModal関係はここから
  const navigate = useNavigate();
  const [commentContent, setCommentContent] = useState("");
  const currentUser = useRecoilValue(currentUserState);


  const modalClose = () => {
    setIsComment(false);
  }

  const CommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const paramsComment = {
        "comment_content": commentContent,
        "post_id": post.id
      }
      const res = await createComment(paramsComment);
      setCommentContent("");
      toast.success("コメントしました");
      navigate("/")
    } catch (e) {
      console.log(e)
      toast.error("コメントに失敗しました。")
    }
  }

  return (
    <>
      <div className='post'>
      {/* {isComment && (<CommentModal post={post} />)
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
