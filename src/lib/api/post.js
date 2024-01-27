import Cookies from "js-cookie";
import client from "./client"

//  base http://localhost:3000/api/v1

const authHeaders = {
  "access-token": Cookies.get("_access_token"),
  client: Cookies.get("_client"),
  uid: Cookies.get("_uid"),
};

export const createPost = (params) => {
  return client.post("/posts", params, {
    headers: authHeaders,
  });
}

export const createComment = (params) => {
  return client.post("/comments", params, {
    headers: authHeaders,
  })
}


export const imageAttach = (params) => {
  return client.post("/images", params);
}



export const fetchAllPosts = (page = 1) => {
  return client.get(`/posts?page=${page}`);
}

export const searchPosts = (query, page=1) => {
  return client.get(`/search?q=${query}&page=${page}`);
}

export const fetchPost = (id) => {
  return client.get(`/posts/${id}`);
}

export const fetchComment = (post_id) => {
  return client.get(`/posts/${post_id}/comments`)
}

export const deletePost = (id) => {
  return client.delete(`/posts/${id}`)
}

export const deleteComment = (id) => {
  return client.delete(`/comments/${id}`)
}


export const createRepost = (post_id, params) => {
  return client.post(`/posts/${post_id}/repost`, params
  )
}

export const deleteRepost = (post_id, params) => {
  return client.delete(`/posts/${post_id}/repost`, { data: params }
  )
}

export const createLike = (post_id, params) => {
  return client.post(`/posts/${post_id}/likes`, params
  )
}

export const deleteLike = (post_id, params) => {
  return client.delete(`/posts/${post_id}/likes`, { data: params }
  )
}

export const createBookmark = (post_id, params) => {
  return client.post(`/posts/${post_id}/bookmarks`, params
  )
}

export const deleteBookmark = (post_id, params) => {
  return client.delete(`/posts/${post_id}/bookmarks`, { data: params }
  )
}




