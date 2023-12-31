import { useState, useEffect } from "react";
import { getPosts, getUsers } from "../lib/api/post";
import { searchPosts } from "../lib/api/fetch";
import { allPostsState } from "../atoms/allPostsState";
import { useRecoilState } from "recoil";
import { getUser } from "../lib/api/auth";
import { allUsersState } from "../atoms/allUsersState";
import { currentUserState } from "../atoms/currentUserState";


function usePostsData(searchTerm) {
  const [posts, setPosts] = useState([]);

  // const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentUser, setCurrentUser] = useRecoilState(currentUserState)
  const [users, setUsers] = useRecoilState(allUsersState);


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

  return { posts, loading, error, currentUser, users };
}

export default usePostsData;
