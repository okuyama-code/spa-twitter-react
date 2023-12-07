import React from 'react'
import { IoMdClose } from 'react-icons/io'

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
        <img src="/assets/person/icon.png" alt="" />
        <div className='flex ml-3'>
          <p>パク・ミニョン</p>
          <p className='comment_modal_post_username'>@minyon01</p>
        </div>
      </div>
    </div>
  )
}

export default CommentModal
