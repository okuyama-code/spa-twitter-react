import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar';
import TimeLine from '../components/timeLine/TimeLine';

import CommentModal from '../components/modal/CommentModal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isCommentState } from '../atoms/isCommentState';

import { isLoginState } from '../atoms/isLoginState';
import Login from './Login';
import { getUser } from '../lib/api/auth';
import { useNavigate } from 'react-router-dom';
import { currentUserState } from '../atoms/currentUserState';
import { toast } from 'react-toastify';
import { getTweets } from '../lib/api/post';
import { allTweetsState } from '../atoms/allTweetsState';



const Home = () => {
  const isLogin = useRecoilValue(isLoginState);
  const isComment = useRecoilValue(isCommentState);
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState)
  const navigate = useNavigate();
  const [twwets, setTweets] = useRecoilState(allTweetsState);



  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUser();
        const currentUser = res.data.currentUserData;
        setCurrentUser(currentUser);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUser();

    const fetchTweets = async () => {
      try {
        const res = await getTweets();
        const allTweets = res.data.tweets;
        setTweets(allTweets);
        console.log(res.data.tweets)
        console.log(res.data.tweets[0])
        console.log(res.data.tweets[0].tweetContent)
      } catch (e) {
        console.log(e);
        toast.error("投稿を取得できませんでした")
      }
    };
    fetchTweets()
  }, [navigate]);

  console.log(currentUser);


  return (
    <div >
      {isLogin ? (<div className='homeContainer'>
        {/* {currentUser.name}
        {currentUser.email}
        {currentUser.email} */}
        <Sidebar />
        <TimeLine />
        {isComment && (<CommentModal />)}
      </div>) : <Login /> }


    </div>


  )
}

export default Home
