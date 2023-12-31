import { useState, useEffect } from "react";
import { getPosts, getUsers } from "../lib/api/post";
import { fetchAllPosts, searchPosts } from "../lib/api/fetch";
import { allPostsState } from "../atoms/allPostsState";
import { useRecoilState } from "recoil";
import { getUser } from "../lib/api/auth";
import { allUsersState } from "../atoms/allUsersState";
import { currentUserState } from "../atoms/currentUserState";


function usePostsData(searchTerm, page = 1) {
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState)
  const [users, setUsers] = useRecoilState(allUsersState);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [totalPosts, setTotalPosts] = useState(0);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    async function loadPosts() {
      try {
        const res = await getUser();
        const currentUser = res.data.currentUserData;
        setCurrentUser(currentUser);

        const res2 = await getUsers();
        const allUsers = res2.data.users;
        setUsers(allUsers)

        let data;
        if (searchTerm) {
          data = await searchPosts(searchTerm, page);
        } else {
          data = await fetchAllPosts(page);
        }

        if (data.posts) {
          setPosts(data.posts);
          setTotalPosts(data.total_count)
          setPerPage(data.per_page)
        }
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
        console.error("Failed to fetch posts: ", e);
      }
    }
    loadPosts();
  }, [searchTerm, page]);

  return { posts, loading, error, currentUser, users, totalPosts, perPage };
}

export default usePostsData;
