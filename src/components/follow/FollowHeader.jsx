import React from 'react'
import "./Follow.scss"
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";

const FollowHeader = () => {
  return (
    <div className='flex following_header'>
      <Link to={{ pathname: "/profile" }}><span className='following_header'><FaArrowLeft /></span></Link>
      <div>
        <h2>okuyama | HC</h2>
        <p>@output0121</p>
      </div>
    </div>
  )
}

export default FollowHeader
