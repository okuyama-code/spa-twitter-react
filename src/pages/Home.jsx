import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar';
import TimeLine from '../components/timeLine/TimeLine';

import CommentModal from '../components/modal/CommentModal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isCommentState } from '../atoms/isCommentState';
import { allUsersState } from '../atoms/allUsersState';
import { getUsers } from '../lib/api/post';

const Home = () => {
  const isComment = useRecoilValue(isCommentState);

  const [users, setUsers] = useRecoilState(allUsersState);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUsers();
        const usersData = res.data.users;
        console.log(usersData)
        setUsers(usersData)
      } catch (e) {
        console.log(e);
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      <div className='homeContainer'>
        {/* {currentUser.name}
        {currentUser.email}
        {currentUser.email} */}
        <Sidebar />
        <TimeLine />
        {isComment && (<CommentModal />)}
      </div>


    </div>


  )
}

export default Home
