import { useRecoilState } from "recoil";
import { currentUserState } from "../atoms/currentUserState";
import { useEffect } from "react";
import { getUser } from "../lib/api/auth";
import { useNavigate } from "react-router-dom";

function useCurrentUser() {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState)

  useEffect(() => {
    async function loadCurrentUser () {
      try {
        const res = await getUser();
        console.log(res.data.current_user_data)
        setCurrentUser(res.data.current_user_data)
      } catch (e) {
        console.log(e)
      }
    }
    loadCurrentUser();
    console.log(currentUser)
  }, [])
}

export default useCurrentUser;
