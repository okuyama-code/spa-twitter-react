import React from 'react'
import "./profilePosts.scss";
import Post from '../post/Post';
import { Posts } from "../../dummyData";

const CommentAll = () => {
  return (
    <div>
      コメント機能作成後に編集
      {Posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  )
}

export default CommentAll
