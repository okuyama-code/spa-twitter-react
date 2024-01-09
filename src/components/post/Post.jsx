import React, { useEffect, useState } from 'react'
import "./Post.scss";
import { CiHeart, CiImageOn } from "react-icons/ci";
import { FaRegComment, FaHeart } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { isCommentState } from '../../atoms/isCommentState';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userListState } from '../../atoms/userListState';
import CommentModal from '../modal/CommentModal';
import { toast } from 'react-toastify';
import { createBookmark, createComment, createLike, createRepost, deleteBookmark, deleteLike, deleteRepost } from '../../lib/api/post';
import { currentUserState } from '../../atoms/currentUserState';
import { IoMdClose } from 'react-icons/io';
import useCurrentUser from '../../hooks/useCurrentUser';



const Post = ({ post }) => {

  // Usersは配列なので一つ一つfilterで取り出す必要がある。
  // const user = Users.filter((user) => user.id === 1 );
  const navigate = useNavigate();

  const [isComment, setIsComment] = useRecoilState(isCommentState);
  const users = useRecoilValue(userListState);

  const [isRepost, setIsRepost] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmark, setIsBookmark] = useState(false)


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

  const { currentUser } = useCurrentUser();

  const handleClickRepostDelete = async (post_id) => {
    try {
      // もしrepostがされてなかったら(false)
      const params = {
        "id": currentUser.id
      }
      const res = await deleteRepost(post_id, params)
      setIsRepost(!isRepost)
      // window.location.reload();
      toast.error("リポストを外しました")

    } catch (e) {
      console.log(e);
    }
  }

  const handleClickRepostCreate = async (post_id) => {
    try {
      // もしrepostがされてなかったら(false)
      const params = {
        "id": currentUser.id
      }
      const res = await createRepost(post_id, params)
      setIsRepost(!isRepost)
      // window.location.reload();
      toast.success("リポストしました")
    } catch (e) {
      console.log(e);
    }
  }

  const handleClickLikeDelete = async (post_id) => {
    try {
      // もしrepostがされてなかったら(false)
      const params = {
        "id": currentUser.id
      }
      await deleteLike(post_id, params)
      setIsLiked(!isLiked)
      // window.location.reload();
      toast.error("いいねを外しました")

    } catch (e) {
      console.log(e);
    }
  }

  const handleClickLikeCreate = async (post_id) => {
    try {
      // もしrepostがされてなかったら(false)
      const params = {
        "id": currentUser.id
      }
      await createLike(post_id, params)
      setIsLiked(!isLiked)
      // window.location.reload();
      toast.success("いいねしました")
    } catch (e) {
      console.log(e);
    }
  }

  const handleClickBookmarkDelete = async (post_id) => {
    try {
      // もしrepostがされてなかったら(false)
      const params = {
        "id": currentUser.id
      }
      await deleteBookmark(post_id, params)
      setIsBookmark(!isBookmark)
      // window.location.reload();
      toast.error("ブックマークを外しました")

    } catch (e) {
      console.log(e);
    }
  }

  const handleClickBookmarkCreate = async (post_id) => {
    try {
      const params = {
        "id": currentUser.id
      }
      await createBookmark(post_id, params)
      setIsBookmark(!isBookmark)
      // window.location.reload();
      toast.success("ブックマークしました")
    } catch (e) {
      console.log(e);
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
              <span className="postDate">
                ID: {users.filter((user) => user.id === post.user_id)[0].id}
              </span>
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
            {/* <span className="IconCount">2</span> */}
          </div>
          {/* repostボタン */}
            {isRepost ? (<div className="PostIcon">
            <button onClick={() => handleClickRepostDelete(post.id)}>
              <AiOutlineRetweet className='postIconIcon icon_repost' />
            </button>
            <span className="IconCount">{post.post_repost_count}</span>
            </div>)
          : (<div className="PostIcon">
              <button onClick={() => handleClickRepostCreate(post.id)}>
                <AiOutlineRetweet className='postIconIcon' />
              </button>
              <span className="IconCount">{post.post_repost_count}</span>
            </div>)}

          {/* Likeボタン */}
          {isLiked
          ? (<div className="PostIcon">
              <button onClick={() => handleClickLikeDelete(post.id)}>
                <FaHeart className='postIconIcon icon_repost' />
              </button>
              <span className="IconCount">{post.post_like_count}</span>
            </div>)
          : (<div className="PostIcon">
              <button onClick={() => handleClickLikeCreate(post.id)}>
                <CiHeart className='postIconIcon' />
              </button>
              <span className="IconCount">{post.post_like_count}</span>
            </div>)
          }

          {isBookmark
            ? (<div className="PostIcon">
                <button onClick={() => handleClickBookmarkDelete(post.id)}>
                  <CiBookmark className='postIconIcon icon_repost' />
                </button>
                <span className="IconCount">{post.post_like_count}</span>
              </div>)
            : (<div className="PostIcon">
                <button onClick={() => handleClickBookmarkCreate(post.id)}>
                  <CiBookmark className='postIconIcon' />
                </button>
                <span className="IconCount">{post.post_like_count}</span>
              </div>)
          }

        </div>
      </div>
    </>
  )
}

export default Post
