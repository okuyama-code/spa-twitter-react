import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { CiImageOn } from "react-icons/ci";


const CommentModal = () => {
  return (
    <div className='comment_modal'>
      <div className='comment_modal_header'>
      {/* <button onClick={handleClick}> */}
        <button>
          <IoMdClose className='close_icon' />
        </button>
      </div>

      <div className='comment_modal_post'>
        <img src="/assets/person/minyon.jpeg" alt="" />
        <div className='ml-3'>
          <div className='flex'>
            <p>パク・ミニョン</p>
            <p className='comment_modal_post_username'>@minyon01</p>
          </div>
          {/* TODO 投稿は改行が反映されるように */}
          <p>返信したい投稿の内容です。難しいかもしれないが頑張ろう。<br />
          返信したい投稿の内容です。難しいかもしれないが頑張ろう。
          </p>
          <p className='replying_to'>Replying to <span>@minyon01</span></p>
        </div>
      </div>
      <div className='comment_form'>
        <img src="/assets/person/icon.png" alt="" />
        <form>
          <textarea name="" id="" cols="60" rows="5" placeholder='Post your reply'></textarea>
          <div className='flex items-center justify-between mx-4'>
            <CiImageOn className='img_icon'/>
            <button>Reply</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default CommentModal
