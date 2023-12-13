import React from 'react'
import "./Share.scss";
import { CiImageOn } from "react-icons/ci";
import { Link } from 'react-router-dom';



const Share = () => {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
          <Link to={{ pathname: "/profile" }}>
            <img src="/assets/person/icon.png" alt="" className='shareProfileImg'/>
          </Link>
          <input type="text" className='shareInput' placeholder='今何してるの？'/>
        </div>
        <hr className='shareHr'/>
        <div className="shareButtons">
          <div className="shareOption">
            <CiImageOn size={30} className='shareIcon' />
          </div>
          <button className="shareButton">投稿</button>
        </div>
      </div>
    </div>
  )
}

export default Share
