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

