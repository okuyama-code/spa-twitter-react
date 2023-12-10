import React from 'react'
import "./profilePosts.scss";
import Post from '../post/Post';
import { Posts } from "../../dummyData";



const PostAll = () => {
  return (
    <div>
      {Posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  )
}

export default PostAll
