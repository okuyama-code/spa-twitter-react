import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar';
import TimeLine from '../components/timeLine/TimeLine';

import CommentModal from '../components/modal/CommentModal';
import { useRecoilValue } from 'recoil';
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

  const isComment = useRecoilValue(isCommentState);



  return (
    <div >
      {/* {isLogin ? (<LoginHome />) :  } */}
      <div className='homeContainer'>
        <Sidebar />
        <TimeLine />
        {isComment && (<CommentModal />)}
      </div>

    </div>


  )
}

export default Home
