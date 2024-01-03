import client from "./client"

export const getUsers = () => {
  return client.get("/users")
}

export const fetchUser = (id) => {
  return client.get(`/users/${id}`)
}

// export const updateUser = (id) => {
//   return client.put(`/profile/${id}`)
// }

async function updatePost(id, postData) {
  const response = await fetch(`http://localhost:3000/api/v1/profile/${id}`, {
    method: "PUT",
    // Doesn't need headers because it's a formData
    // headers: {
    //   "Content-Type": "application/json",
    // },
    // body: JSON.stringify(postData),
    body: postData
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

export { updatePost }
