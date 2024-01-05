import React, { useEffect, useState } from 'react'
import Share from '../share/Share'
import Post from '../post/Post'

import "./TimeLine.scss"
import SearchBar from '../searchBar/SearchBar';

import { useNavigate, useSearchParams } from 'react-router-dom';

import useURLSearchParam from "../../hooks/useURLSearchParams"
import Pagination from '../pagination/Pagination';
import { CircularProgress } from '@mui/material';
import useTimeLineData from '../../hooks/useTimeLineData';
import CommentModal from '../modal/CommentModal';
import { isCommentState } from '../../atoms/isCommentState';
import { useRecoilState } from 'recoil';



const TimeLine = () => {

  // const [currentUser, setCurrentUser] = useRecoilState(currentUserState)
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  // const setUsers = useSetRecoilState(allUsersState);
  const [, setUsers] = useState([]);

  // 検索機能の担当  searchTerm 検索語
  const [searchTerm, setSearchTerm] = useState("");
  // デバウンス（遅延実行)
  const [debouncedSearchTerm, setDebouncedSearchTerm] =
    useURLSearchParam("search");

  const [searchParams, setSearchParams] = useSearchParams();

  const initialPageFromURL = Number(searchParams.get("page") || "1");
  const [currentPage, setCurrentPage] = useState(initialPageFromURL);


  const {
    posts: fetchedPosts,
    loading,
    error,
    users: fetchedUsers,
    totalPosts,
    perPage,
  } = useTimeLineData(debouncedSearchTerm, currentPage);



  useEffect(() => {
    if (fetchedPosts) {
      setPosts(fetchedPosts);
      setUsers(fetchedUsers);
    }
  }, [fetchedPosts]);

   useEffect(() => {
    const initialSearchTerm = searchParams.get("search") || "";
    setSearchTerm(initialSearchTerm);

    const pageFromURL = searchParams.get("page") || "1";
    setCurrentPage(Number(pageFromURL));

  }, [searchParams])

  const handleImmediateSearchChange = (searchValue) => {
    setSearchTerm(searchValue);
  };


  // debounceとは  イベントを呼び出し後、次のイベントまで指定した時間が経過するまではイベントを発生させない処理。
  const handleDebouncedSearchChange = (searchValue) => {
    setDebouncedSearchTerm(searchValue);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);


    setSearchParams({ search: debouncedSearchTerm, page: page});
  }

  const [isComment, setIsComment] = useRecoilState(isCommentState);

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
        <div>
          <Post post={post} key={post.id} />
        </div>

      ))}





    </div>
  )
}

export default TimeLine
