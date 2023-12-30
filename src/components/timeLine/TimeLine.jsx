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
import useURLSearchParam from "../../hooks/useURLSearchParams"
import usePostsData from '../../hooks/usePostData';



const TimeLine = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState)
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  // 検索機能の担当  searchTerm 検索語
  const [searchTerm, setSearchTerm] = useState("");
  // 、Reactのカスタムフック useURLSearchParams を使用して、URLのクエリパラメータを取得し、デバウンス（遅延実行）された検索キーワードを状態として管理するコード
  const [debouncedSearchTerm, setDebouncedSearchTerm] =
    useURLSearchParam("search");

  const {
    posts: fetchedPosts,
    loading,
    error,
    // image,
  } = usePostsData(debouncedSearchTerm);


  // const setUsers = useSetRecoilState(allUsersState);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const res = await getUser();
  //       const currentUser = res.data.currentUserData;
  //       setCurrentUser(currentUser);

  //       const res2 = await getUsers();
  //       const allUsers = res2.data.users;
  //       setUsers(allUsers)
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   fetchUser();

  //   // const fetchPosts = async () => {
  //   //   try {
  //   //     const res = await getPosts();
  //   //     const allPosts = res.data.posts;
  //   //     const activeImage = res.data.image;
  //   //     // console.log(res);

  //   //     setImage(activeImage);
  //   //     setPosts(allPosts);
  //   //     // toast.success("投稿とユーザーを取得しました")
  //   //   } catch (e) {
  //   //     console.log(e);
  //   //     toast.error("投稿を取得できませんでした")
  //   //   }
  //   // };
  //   // fetchPosts()

  // }, [navigate]);

  useEffect(() => {
    if (fetchedPosts) {
      setPosts(fetchedPosts); // Update the posts state once fetchedPosts is available
    }
    console.log(posts)
  }, [fetchedPosts]);

  const handleImmediateSearchChange = (searchValue) => {
    setSearchTerm(searchValue);
  };


  // debounceとは  イベントを呼び出し後、次のイベントまで指定した時間が経過するまではイベントを発生させない処理。
  const handleDebouncedSearchChange = (searchValue) => {
    setDebouncedSearchTerm(searchValue);
  };

  return (
    <div className='timeLine'>
      <Share />
      <SearchBar
        value={searchTerm}
        onSearchChange={handleDebouncedSearchChange}
        onImmediateChange={handleImmediateSearchChange}
      />
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}

    </div>
  )
}

export default TimeLine
