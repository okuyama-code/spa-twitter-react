import React from 'react'
import "./Post.scss";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { isCommentState } from '../../atoms/isCommentState';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userListState } from '../../atoms/userListState';
import { deleteComment, deletePost } from '../../lib/api/post';




const ProfileComments = ({ post, currentUser }) => {
  const navigate = useNavigate();
  const [isComment, setIsComment] = useRecoilState(isCommentState);
  const users = useRecoilValue(userListState);

  // console.log(currentUser)


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

  const deleteCommentHandler = async (post) => {
    try {
      await deleteComment(post.id);
      // 特定のidに一致しない投稿のみを残す
      // 関数内でtrueが返ってきたもののみを抽出
      navigate("/home")
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className='post'>
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
              {currentUser.id == post.user_id && (
              <button
                className='deleteBtn'
                onClick={() => deleteCommentHandler(post)}
               >
                   削除
               </button>
              )}
            </div>
          </div>
        </div>
          <div className="postCenter">
            <p className="postText">{post.comment_content}</p>
          </div>
      </div>
    </>
  )
}

export default ProfileComments
