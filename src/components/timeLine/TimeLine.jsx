import React, { } from 'react'
import Share from '../share/Share'
import Post from '../post/Post'
import { Posts } from "../../dummyData";
import { allTweetsState } from '../../atoms/allTweetsState';
import { useRecoilState } from 'recoil';


const TimeLine = () => {
  const [twwets, setTweets] = useRecoilState(allTweetsState);

  return (
    <div className='timeLine'>
      <Share />
      {twwets.map((tweet) => (
        <Post post={tweet} key={tweet.id}   />
      ))}



    </div>
  )
}

export default TimeLine
