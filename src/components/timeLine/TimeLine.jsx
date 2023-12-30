import React, { useEffect, useState } from 'react'
import Share from '../share/Share'
import Post from '../post/Post'
// import { Posts } from "../../dummyData";
import { allPostsState } from '../../atoms/allPostsState';
import { useRecoilState, useSetRecoilState } from 'recoil';
import "./TimeLine.scss"
import SearchBar from '../searchBar/SearchBar';
import { currentUserState } from '../../atoms/currentUserState';
import { useNavigate } from 'react-router-dom';
import { allUsersState } from '../../atoms/allUsersState';
import { getUser } from '../../lib/api/auth';
import { getPosts, getUsers } from '../../lib/api/post';
import { toast } from 'react-toastify';


const TimeLine = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState)
  const navigate = useNavigate();
  const [posts, setPosts] = useRecoilState(allPostsState);


  const setUsers = useSetRecoilState(allUsersState);
  const [image, setImage] = useState("");

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
        const res = await getPosts();
        const res2 = await getUsers();
        const allTweets = res.data.posts;
        const allUsers = res2.data.users;
        const activeImage = res.data.image;
        // console.log(res);
        console.log(res2);

        setImage(activeImage);
        setPosts(allTweets);
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
    <div className='timeLine'>
      <Share />
      <SearchBar />
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}

    </div>
  )
}

export default TimeLine
