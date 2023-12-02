import React from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { FaBookDead } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";

import { GiBirdTwitter } from "react-icons/gi";




const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul className='mt-3 ml-5'>
        <li className='x'>
          <BsTwitterX size={40} className='mx-2 mb-9 mt-4 sidebar_item' />
        </li>
        <li className='flex items-center mb-3'>
          <IoHomeSharp size={40} className='mx-2 mb-3' />
          <span className='hidden xl:inline text-3xl font-bold pb-3 ml-3'>ホーム</span>
        </li>
        <li className='flex items-center mb-3'>
          <IoMdNotificationsOutline size={40} className='mx-2 mb-3' />
          <span className='hidden xl:inline text-3xl font-bold pb-3 ml-3'>通知</span>
        </li>
        <li className='flex items-center mb-3'>
          <IoMailOutline size={40} className='mx-2 mb-3' />
          <span className='hidden xl:inline text-3xl font-bold pb-3 ml-3'>DM</span>
        </li>
        <li className='flex items-center mb-3'>
          <FaBookDead size={40} className='mx-2 mb-3' />
          <span className='hidden xl:inline text-3xl font-bold pb-3 ml-3'>ブックマーク</span>
        </li>
        <li className='flex items-center mb-3'>
          <IoPersonSharp size={40} className='mx-2 mb-3' />
          <span className='hidden xl:inline text-3xl font-bold pb-3 ml-3'>Profile</span>
        </li>
        <li className='flex items-center mb-3'>
          <CiCircleMore size={40} className='mx-2 mb-3' />
          <span className='hidden xl:inline text-3xl font-bold pb-3 ml-3'>その他</span>
        </li>
        <li className='flex items-center mb-3'>
          <GiBirdTwitter size={50} className='mx-2 mb-3 mt-3' />
          <span className='hidden xl:inline text-3xl font-bold pb-3 ml-3'>投稿</span>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
