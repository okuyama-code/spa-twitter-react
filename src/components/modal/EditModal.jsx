import React from 'react'
import "./Modal.scss";
import { IoMdClose } from "react-icons/io";



const EditModal = () => {
  return (
    <>
      <div className='edit_modal'>
        <div className='flex justify-between mt-1'>
          <div className='flex'>
            <IoMdClose className='close_icon' />
            <h2 className='edit_h2'>Edit Profile</h2>
          </div>

          <input type="submit" value="保存する"  className='editButton'></input>
          {/* <button  className='editButton'>保存する</button> */}
        </div>

        <div className='edit_profile_img'>
          <img src="/assets/suisu0.jpg" alt="" className='header_img' />
          <img src="/assets/person/icon.png" alt="" className='icon_img' />
        </div>

        <form className='edit_form'>
          <input type="text" placeholder='お名前' />
          <textarea name="" id="" cols="70" rows="4" placeholder='自己紹介文'></textarea>
          <input type="text" placeholder='住んでいる場所' />
          <input type="text" placeholder='ウェブサイト'  />
          <input type="text" placeholder='1998/01/21' className='input_last' />
        </form>
      </div>
    </>
  )
}

export default EditModal
