import client from "./client"

export const getUsers = () => {
  return client.get("/users")
}

export const fetchUser = (id) => {
  return client.get(`/users/${id}`)
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
