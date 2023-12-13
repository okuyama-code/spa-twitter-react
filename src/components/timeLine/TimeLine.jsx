import React from 'react'
import Share from '../share/Share'
import Post from '../post/Post'
import { Posts } from "../../dummyData";

const TimeLine = ({ handleClickComment }) => {
  return (
    <div className='timeLine'>
      <Share />
      {Posts.map((post) => (
        <Post post={post} key={post.id}  handleClickComment={handleClickComment} />
      ))}



    </div>
  )
}

export default TimeLine
