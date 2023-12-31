import Cookies from "js-cookie";
import client from "./client"

//  base http://localhost:3000/api/v1


// Reactからcurrent_user.idを送るパターン
// export const createTweet = (params) => {
//   return client.post("/tweets", params);
// }

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

export const getPosts = () => {
  return client.get(`/posts`);
}

export const getUsers = () => {
  return client.get("/user_all")
}

// TODO ここのparamsであっているのか疑問
export const getPost = (params) => {
  return client.get("/posts/:id", params);
}

