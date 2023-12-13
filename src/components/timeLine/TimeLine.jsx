import React from 'react'
import Share from '../share/Share'
import Post from '../post/Post'
import { Posts } from "../../dummyData";

const TimeLine = () => {
  return (
    <div className='timeLine'>
      <Share />
      {Posts.map((post) => (
        <Post post={post} key={post.id}   />
      ))}



    </div>
  )
}

export default TimeLine
