import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar';
import TimeLine from '../components/timeLine/TimeLine';

import CommentModal from '../components/modal/CommentModal';
import { useRecoilState } from 'recoil';
import { isCommentState } from '../atoms/isCommentState';
import { getUser } from '../lib/api/auth';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const f = async () => {
      try {
        const res = await getUser();
        console.log(res);
        if (res.data.isLogin) {
          navigate("/home");
        }
      } catch (e) {
        console.log(e);
      }
    };
    f();
  }, [navigate]);

  const [isComment, setIsComment] = useRecoilState(isCommentState);

  const handleClickComment = () => {
    setIsComment(!isComment);
  }

  return (
    <div >
      <div className='homeContainer'>
        <Sidebar />
        <TimeLine  handleClickComment={handleClickComment} />
        {isComment && (<CommentModal  handleClickComment={handleClickComment}/>)}
      </div>
    </div>


  )
}

export default Home
