import React, { useState } from 'react'
import "./Share.scss";
import { CiImageOn } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createTweet } from '../../lib/api/post';
import { currentUserState } from '../../atoms/currentUserState';
import { useRecoilState } from 'recoil';



const Share = () => {
  const [tweetContent, setTweetContent] = useState("");
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState)
  const navigate = useNavigate();

  const currentUserId = currentUser.id


  //buttonをクリックしたら走る関数
  const Tweet = async (e) => {
    e.preventDefault();
    try {
      const params = {
        "tweet_content": tweetContent,
        "user_id": currentUserId
      }
      console.log(tweetContent);
      const res = await createTweet(params);
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
            {currentUserId}
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
          {/* <input
            type='submit'
            className="shareButton"
            onClick={Tweet}
          >投稿</input> */}
        </div>
      </div>
    </div>
  )
}

export default Share
