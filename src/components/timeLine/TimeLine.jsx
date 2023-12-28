import React, { } from 'react'
import Share from '../share/Share'
import Post from '../post/Post'
// import { Posts } from "../../dummyData";
import { allTweetsState } from '../../atoms/allTweetsState';
import { useRecoilState } from 'recoil';
import { Pagination } from '@material-ui/lab';
import "./TimeLine.scss"


const TimeLine = () => {
  const [twwets, setTweets] = useRecoilState(allTweetsState);

  return (
    <div className='timeLine'>
      <Share />
      <div className='pagination'>
        <Pagination
        count={20} //ページ数
        page={1} //現在のページ
        // defaultPage={1}
        // siblingCount={0}
        // boundaryCount={3}
        color="primary"
        />
      </div>
      {twwets.map((tweet) => (
        <Post post={tweet} key={tweet.id}   />
      ))}

    </div>
  )
}

export default TimeLine
