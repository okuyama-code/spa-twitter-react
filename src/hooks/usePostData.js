import { useState, useEffect } from "react";
import { fetchAllPosts, searchPosts } from "../lib/api/post";
import { userListState } from "../atoms/userListState";
import { useRecoilState } from "recoil";
import { getUsers } from "../lib/api/user";


function usePostsData(searchTerm, page = 1) {
  const [posts, setPosts] = useState([]);

  const [users, setUsers] = useRecoilState(userListState);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [totalPosts, setTotalPosts] = useState(0);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    async function loadPosts() {
      try {
        const res = await getUsers();
        const allUsers = res.data.users;
        setUsers(allUsers)

        let data;
        if (searchTerm) {
          data = await searchPosts(searchTerm, page);
        } else {
          data = await fetchAllPosts(page);
        }

        if (data.data.posts) {
          setPosts(data.data.posts);
          setTotalPosts(data.data.total_count)
          setPerPage(data.data.per_page)
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

  return { posts, loading, error, users, totalPosts, perPage };
}

export default usePostsData;
