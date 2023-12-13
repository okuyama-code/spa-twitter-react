import React from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";

import { GiBirdTwitter } from "react-icons/gi";
import { IoExitOutline } from "react-icons/io5";
import { ImExit } from "react-icons/im";

import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Sidebar = () => {
  const navigate = useNavigate();


  const logout = (e) => {
    e.preventDefault()
    Cookies.remove('_access_token');
    Cookies.remove('_client');
    Cookies.remove('_uid');
    navigate('/');
  }

  return (
    <div className='sidebar'>
      <ul className='mt-3 ml-5'>
        <Link to={{ pathname: "/" }}>
          <li className='x'>
            <BsTwitterX size={40} className='mx-2 mb-9 mt-4 sidebar_item' />
          </li>
        </Link>
        <Link to={{ pathname: "/" }}>
          <li className='flex items-center mb-3 sidebar_items'>
            <IoHomeSharp size={40} className='mx-2 mb-3' />
            <span className='hidden xl:inline text-3xl font-bold pb-3 ml-3 '>ホーム</span>
          </li>
        </Link>
        <Link to={{ pathname: "/notifications" }}>
          <li className='flex items-center mb-3 sidebar_items'>
            <IoMdNotificationsOutline size={40} className='mx-2 mb-3' />
            <span className='hidden xl:inline text-3xl font-bold pb-3 ml-3'>通知</span>
          </li>
        </Link>
        <Link to={{ pathname: "/messages" }}>
          <li className='flex items-center mb-3 sidebar_items'>
            <IoMailOutline size={40} className='mx-2 mb-3' />
            <span className='hidden xl:inline text-3xl font-bold pb-3 ml-3'>DM</span>
          </li>
        </Link>
        <Link to={{ pathname: "/profile" }}>
          <li className='flex items-center mb-3 sidebar_items'>
            <IoPersonSharp size={40} className='mx-2 mb-3' />
            <span className='hidden xl:inline text-3xl font-bold pb-3 ml-3'>プロフィール</span>
          </li>
        </Link>
        {/* onClickでセッションを消す処理をできるように */}
        <li className='sidebar_items'>
          <button onClick={logout}>
            <div className='flex items-center mb-3'>
              <IoExitOutline size={40} className='mx-2 mb-3' />
              <span className='hidden xl:inline text-3xl font-bold pb-3 ml-3'>ログアウト</span>
            </div>
          </button>
        </li>
        <li className='flex items-center mb-3 sidebar_items'>
          <CiCircleMore size={40} className='mx-2 mb-3' />
          <span className='hidden xl:inline text-3xl font-bold pb-3 ml-3'>その他</span>
        </li>
        <li className='flex items-center mb-3 sidebar_items'>
          <ImExit size={40} className='ml-3 mr-1 mb-3' />
          <span className='hidden xl:inline text-3xl font-bold pb-3 ml-3'>退会</span>
        </li>
        <li className='flex items-center mb-3 sidebar_items post_side_icon'>
          <GiBirdTwitter size={50} className='mx-2 mb-3 mt-3' />
          <span className='hidden xl:inline text-3xl font-bold pb-3 ml-3'>投稿</span>
        </li>
        <Link to="/signUp">
          <li className='flex items-center mb-3 sidebar_items'>
            新規登録
          </li>
        </Link>
        <Link to="/postShow">
          <li className='flex items-center mb-3 sidebar_items'>
            投稿詳細
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default Sidebar
