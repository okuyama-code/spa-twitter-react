import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar';
import TimeLine from '../components/timeLine/TimeLine';

import CommentModal from '../components/modal/CommentModal';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { isCommentState } from '../atoms/isCommentState';

import { isLoginState } from '../atoms/isLoginState';
import Login from './Login';
import { getUser } from '../lib/api/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { currentUserState } from '../atoms/currentUserState';
import { toast } from 'react-toastify';
import { getTweets } from '../lib/api/post';
import { allTweetsState } from '../atoms/allTweetsState';
import { allUsersState } from '../atoms/allUsersState';



const Home = () => {
  const isLogin = useRecoilValue(isLoginState);
  const isComment = useRecoilValue(isCommentState);
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState)
  const navigate = useNavigate();
  const [twwets, setTweets] = useRecoilState(allTweetsState);

  const setUsers = useSetRecoilState(allUsersState);
  const [image, setImage] = useState("");


  // ここからペアプロで追加
  // let { id } = useParams();
  // console.log(id);
  const [page,setPage] = useState(1);
  // const params = useParams();
  // console.log(params)

  // ここまで
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
        const allUsers = res.data.users
        const activeImage = res.data.image;
        console.log(res);
        console.log(res.request.responseURL);
        console.log(res.data.totalCount);
        setImage(activeImage);
        setTweets(allTweets);
        setUsers(allUsers)
        // toast.success("投稿とユーザーを取得しました")
      } catch (e) {
        console.log(e);
        toast.error("投稿を取得できませんでした")
      }
    };
    fetchTweets()
  }, [navigate]);



  return (
    <div >
      {/* <img src={image} alt="" /> */}
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
