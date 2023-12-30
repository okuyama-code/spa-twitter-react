
  const [image, setImage] = useState("");
  const [posts, setPosts] = useRecoilState(allPostsState);

const fetchPosts = async () => {
      try {
        const res = await getPosts();
        const allPosts = res.data.posts;
        const activeImage = res.data.image;
        // console.log(res);

        setImage(activeImage);
        setPosts(allPosts);
        // toast.success("投稿とユーザーを取得しました")
      } catch (e) {
        console.log(e);
        toast.error("投稿を取得できませんでした")
      }
    };
    fetchPosts()
