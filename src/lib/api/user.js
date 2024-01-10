import Cookies from "js-cookie";
import client from "./client"


export const getUsers = () => {
  return client.get("/users")
}

// ログアウトしてログインしなおしたらcurrent_userが取れた。不思議な挙動をするときがあるので注意
export const fetchUser = (id) => {
  return client.get(`/users/${id}`, {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    }
  })
}

export const updateUser = (id, postData) => {
  return client.put(`/profile/${id}`, postData)
}

export const followUser = (user_id, params) => {
  return client.post(`/users/${user_id}/follow`, params)
}

export const unfollowUser = (user_id, params) => {
  return client.post(`/users/${user_id}/unfollow`,  params)
}

export const Withdrawal = (params) => {
  return client.post('/current_user/destroy',params)
}
