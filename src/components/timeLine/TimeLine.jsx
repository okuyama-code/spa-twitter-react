import React, { } from 'react'
import Share from '../share/Share'
import Post from '../post/Post'
// import { Posts } from "../../dummyData";
import { allPostsState } from '../../atoms/allPostsState';
import { useRecoilState } from 'recoil';
import "./TimeLine.scss"


const TimeLine = () => {
  const [posts, setPosts] = useRecoilState(allPostsState);


  return (
    <div className='timeLine'>
      <Share />
      <div className='pagination'>
      </div>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}

    </div>
  )
}

export default TimeLine
