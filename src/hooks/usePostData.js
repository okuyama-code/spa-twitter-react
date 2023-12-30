import { useState, useEffect } from "react";
import { getPosts } from "../lib/api/post";
import { searchPosts } from "../lib/api/fetch";
import { allPostsState } from "../atoms/allPostsState";
import { useRecoilState } from "recoil";


function usePostsData(searchTerm) {
  const [posts, setPosts] = useState([]);

  // const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        let data;
        if (searchTerm) {
          data = await searchPosts(searchTerm);
          // console.log(data);
        } else {
          const res = await getPosts();
          data = res.data.posts;
          // const activeImage = res.data.image;
          // setImage(activeImage);
        }
        setPosts(data);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
        console.error("Failed to fetch posts: ", e);
      }
    }
    loadPosts();
  }, [searchTerm]);

  return { posts, loading, error };
}

export default usePostsData;
