import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { CiImageOn } from "react-icons/ci";
import { useSetRecoilState } from 'recoil';
import { isCommentState } from '../../atoms/isCommentState';


const CommentModal = () => {
  const setIsComment = useSetRecoilState(isCommentState);

  const modalClose = () => {
    setIsComment(false);
  }

  return (
    <div className='comment_modal'>
      <div className='comment_modal_header'>
        <button onClick={modalClose}>
          <IoMdClose className='close_icon' />
        </button>
      </div>

      <div className='comment_modal_post'>
        <img src="/assets/person/minyon.jpeg" alt="" />
        <div className='ml-3'>
          <div className='flex'>
            <h3>パク・ミニョン</h3>
            <p className='comment_modal_post_username'>@minyon01</p>
          </div>
          <h3>返信したい投稿の内容です。難しいかもしれないが頑張ろう。<br />
          返信したい投稿の内容です。難しいかもしれないが頑張ろう。
          </h3>
          <p className='replying_to'>Replying to <span>@minyon01</span></p>
        </div>
      </div>
      <div className='comment_form'>
        <img src="/assets/person/icon.png" alt="" />
        <form>
          <textarea name="" id="" cols="60" rows="5" placeholder='Post your reply'></textarea>
          <div className='flex items-center justify-between mx-4'>
            <CiImageOn className='img_icon'/>
            <button >Reply</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default CommentModal
