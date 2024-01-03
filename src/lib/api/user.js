import client from "./client"

export const getUsers = () => {
  return client.get("/users")
}

export const fetchUser = (id) => {
  return client.get(`/users/${id}`)
}
