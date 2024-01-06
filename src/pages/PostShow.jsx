import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { IoIosArrowRoundBack } from "react-icons/io";

import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

import { CiImageOn } from "react-icons/ci";
import { Link, useNavigate, useParams } from 'react-router-dom';
import CommentModal from '../components/modal/CommentModal';
import { isCommentState } from '../atoms/isCommentState';
import { useRecoilState, useRecoilValue } from 'recoil';

import { deleteComment, fetchComment, fetchPost } from '../lib/api/post';
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
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  const [users, setUsers] = useRecoilState(userListState);

  const { currentUser } = useCurrentUser();

  const navigate = useNavigate();


  useEffect(() => {
    const fetchCurrentPost = async () => {
      try {
        const res2 = await getUsers();
        const allUsers = res2.data.users;
        setUsers(allUsers)
        const res = await fetchPost(id);
        setPost(res.data);

        const res3 = await fetchComment(id)
        console.log(res3.data.post_comments)
        setComments(res3.data.post_comments)
      } catch (e) {
        console.log("エラーが発生しました", e)
      }
    }
    fetchCurrentPost();
  }, [id])

  const deleteCommentHandler = async (comment) => {
    try {
      await deleteComment(comment.id);
      // 特定のidに一致しない投稿のみを残す
      // 関数内でtrueが返ってきたもののみを抽出
      navigate("/home")
    } catch (e) {
      console.log(e);
    }
  }

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
              <Link to={{ pathname: `/users/${users.filter((user) => user.id === post.user_id)[0].id} `}}>
                <h2>{users.filter((user) => user.id === post.user_id)[0].name}</h2>
              </Link>
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
              <span className="IconCount">{comments.length}</span>
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
        {comments.map((comment) => (
          <div className="commentPostWrapper">
            <div className='commentPostInfo'>
              <img src={users.filter((user) => user.id === comment.user_id)[0].icon_url} alt="" />
              <div>
                <div className='flex items-center'>
                  <h3>{users.filter((user) => user.id === comment.user_id)[0].name}</h3>
                  <p>@{users.filter((user) => user.id === comment.user_id)[0].username}</p>
                  {currentUser.id == users.filter((user) => user.id === comment.user_id)[0].id && (
                    <button
                    className='commentDelete'
                    onClick={() => deleteCommentHandler(comment)}
                  >
                    削除
                  </button>
                  )}
                </div>
                <p>{comment.comment_content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostShow
