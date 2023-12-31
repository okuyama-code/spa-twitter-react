import React, { useEffect, useState } from 'react'
import Share from '../share/Share'
import Post from '../post/Post'
// import { Posts } from "../../dummyData";
import { allPostsState } from '../../atoms/allPostsState';
import { useRecoilState, useSetRecoilState } from 'recoil';
import "./TimeLine.scss"
import SearchBar from '../searchBar/SearchBar';
import { currentUserState } from '../../atoms/currentUserState';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { allUsersState } from '../../atoms/allUsersState';
import { getUser } from '../../lib/api/auth';
import { getPosts, getUsers } from '../../lib/api/post';
import { toast } from 'react-toastify';
import useURLSearchParam from "../../hooks/useURLSearchParams"
import usePostsData from '../../hooks/usePostData';
import Pagination from '../pagination/Pagination';
import { CircularProgress } from '@mui/material';



const TimeLine = () => {
  // const [currentUser, setCurrentUser] = useRecoilState(currentUserState)
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  // const setUsers = useSetRecoilState(allUsersState);
  const [users, setUsers] = useState([]);

  // 検索機能の担当  searchTerm 検索語
  const [searchTerm, setSearchTerm] = useState("");
  // デバウンス（遅延実行)
  const [debouncedSearchTerm, setDebouncedSearchTerm] =
    useURLSearchParam("search");

  // pagination追記
  const [searchParams, setSearchParams] = useSearchParams();

  const initialPageFromURL = Number(searchParams.get("page") || "1");
  const [currentPage, setCurrentPage] = useState(initialPageFromURL);
  // part29追記

  const {
    posts: fetchedPosts,
    loading,
    error,
    currentUser,
    users: fetchedUsers,
    totalPosts,
    perPage,
    // image,
  } = usePostsData(debouncedSearchTerm);



  useEffect(() => {
    if (fetchedPosts) {
      setPosts(fetchedPosts); // Update the posts state once fetchedPosts is available
      setUsers(fetchedUsers);
    }
    // console.log(posts)
  }, [fetchedPosts]);

   // part29追記
   useEffect(() => {
    const initialSearchTerm = searchParams.get("search") || "";
    setSearchTerm(initialSearchTerm);

    const pageFromURL = searchParams.get("page") || "1";
    setCurrentPage(Number(pageFromURL));

  }, [searchParams])
  // part29追記

  const handleImmediateSearchChange = (searchValue) => {
    setSearchTerm(searchValue);
  };


  // debounceとは  イベントを呼び出し後、次のイベントまで指定した時間が経過するまではイベントを発生させない処理。
  const handleDebouncedSearchChange = (searchValue) => {
    setDebouncedSearchTerm(searchValue);
  };

   // part29追記
  const handlePageChange = (page) => {
    setCurrentPage(page);

    // Update the URL to include the page number
    // ページ番号を含めるように URL を更新します
    setSearchParams({ search: debouncedSearchTerm, page: page});
  }

  // part29追記

  return (
    <div className='timeLine'>
      <Share />
      <SearchBar
        value={searchTerm}
        onSearchChange={handleDebouncedSearchChange}
        onImmediateChange={handleImmediateSearchChange}
      />
      <Pagination
        currentPage={currentPage}
        totalPosts={totalPosts}
        postsPerPage={perPage}
        onPageChange={handlePageChange}
      />

      {loading && (<div className='loading'><CircularProgress color="inherit" /></div>)}
      {error && (<p>Error loading posts.(投稿の読み込み中にエラーが発生しました。)</p>)}

      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}

    </div>
  )
}

export default TimeLine
