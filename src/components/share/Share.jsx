import React from 'react'
import "./Share.scss";
import { CiImageOn } from "react-icons/ci";
import { CiGift } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";
import { DiGoogleAnalytics } from "react-icons/di";



const Share = () => {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/person/icon.png" alt="" className='shareProfileImg'/>
                <input type="text" className='shareInput' placeholder='今何してるの？'/>
            </div>
            <hr className='shareHr'/>
            <div className="shareButtons">
                <div className="shareOptions">
                    <div className="shareOption">
                        <CiImageOn className='shareIcon' />
                        <span className="shareOptionText">写真</span>
                    </div>
                    <div className="shareOption">
                        <CiGift className='shareIcon' />
                        <span className="shareOptionText">GIF</span>
                    </div>
                    <div className="shareOption">
                        <CiFaceSmile className='shareIcon' />
                        <span className="shareOptionText">気持ち</span>
                    </div>
                    <div className="shareOption">
                        <DiGoogleAnalytics className='shareIcon' htmlColor='red'/>
                        <span className="shareOptionText">投票</span>
                    </div>
                </div>
                <button className="shareButton">投稿</button>
            </div>
        </div>
    </div>
  )
}

export default Share
