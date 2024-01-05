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


