import Cookies from "js-cookie";
import client from "./client"

//  base http://localhost:3000/api/v1


// API側でcurrent_userを使えるようにするためにheadersでユーザー情報を送る。HTTPヘッダーで現在のログインしたUser情報を追加してサーバー側に送らないとコントローラー内でcurrent_userが取得できずnilになるので重要な記述
export const createPost = (params) => {
  return client.post("/posts", params, {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
}

export const imageAttach = (params) => {
  return client.post("/images", params);
}

export const getUsers = () => {
  return client.get("/users")
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


