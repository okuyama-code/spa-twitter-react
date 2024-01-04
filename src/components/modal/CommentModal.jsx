import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { CiImageOn } from "react-icons/ci";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isCommentState } from '../../atoms/isCommentState';
import { userListState } from '../../atoms/userListState';
import { currentUserState } from '../../atoms/currentUserState';
import { createComment } from '../../lib/api/post';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const CommentModal = ( { post, id } ) => {
  const [commentContent, setCommentContent] = useState("");

  const setIsComment = useSetRecoilState(isCommentState);

  const users = useRecoilValue(userListState);
  const currentUser = useRecoilValue(currentUserState);
  const navigate = useNavigate();

  const modalClose = () => {
    setIsComment(false);
  }

  const CommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const paramsComment = {
        "comment_content": commentContent,
        "post_id": id
      }
      const res = await createComment(paramsComment);
      console.log(res)
      setCommentContent("");
      toast.success("コメントしました");
      // navigate("/")
    } catch (e) {
      console.log(e)
      toast.error("コメントに失敗しました。")
    }
  }

  // console.log(post)
  // console.log(currentUser)
  // console.log(post.id)
  // console.log(users)

  return (
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
        {/* Form */}
        <form>
          <textarea cols="60" rows="5"
            placeholder='Post your reply'
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
          />
          <div className='flex items-center justify-between mx-4'>
            <CiImageOn className='img_icon'/>
            <button
              onClick={CommentSubmit}
            >返信</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default CommentModal
