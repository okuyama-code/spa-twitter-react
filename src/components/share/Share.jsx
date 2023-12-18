import React, { useState } from 'react'
import "./Share.scss";
import { CiImageOn } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createTweet } from '../../lib/api/post';



const Share = () => {
  const [tweetContent, setTweetContent] = useState("");
  const navigate = useNavigate();


  //buttonをクリックしたら走る関数
  const Tweet = async (e) => {
    e.preventDefault();
    try {
      const res = await createTweet(tweetContent);
      console.log(res);
      toast.success("投稿しました");
      navigate("/");
    } catch(e) {
      console.log(e);
      toast.error("投稿に失敗しました。")
    }
  }

  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
          <Link to={{ pathname: "/profile" }}>
            <img src="/assets/person/icon.png" alt="" className='shareProfileImg'/>
            {/* {currentUser.name} */}
          </Link>
          <input
            type="text"
            name="tweet_content"
            className='shareInput'
            placeholder='今何してるの？'
            value={tweetContent}
            onChange={(e) => setTweetContent(e.target.value)}
            />
        </div>
        <hr className='shareHr'/>
        <div className="shareButtons">
          <div className="shareOption">
            <CiImageOn size={30} className='shareIcon' />
          </div>
          <button
            className="shareButton"
            onClick={Tweet}
          >投稿</button>
        </div>
      </div>
    </div>
  )
}

export default Share
