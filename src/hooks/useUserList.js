import { useRecoilState } from "recoil";
import { userListState } from "../atoms/userListState";
import { getUsers } from "../lib/api/user";
import { useEffect } from "react";

function useUserList() {
  const [users, setUsers] = useRecoilState(userListState);


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUsers();
        const usersData = res.data.users;
        setUsers(usersData)
      } catch (e) {
        console.log(e);
      }
    };
    fetchUser();
  }, []);

  return { users }
}

export default useUserList;
