import { POSTS_API_URL, SEARCH_API_URL } from "../../constants";

async function fetchAllPosts(page = 1) {
  const response = await fetch(`${POSTS_API_URL}?page=${page}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}


async function searchPosts(query, page=1) {
  // api/v1/search + /posts/?q=t...
  const response = await fetch(`${SEARCH_API_URL}/?q=${query}&page=${page}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

async function fetchPost(id) {
  const response = await fetch(`${POSTS_API_URL}/${id}`);
  // HTTPリクエストが成功していない場合、ステータステキストを含むエラーを投げる
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}
// async function fetchPost(id) {
//   const response = await fetch(`http://localhost:3000/api/v1/posts/${id}`);
//   // HTTPリクエストが成功していない場合、ステータステキストを含むエラーを投げる
//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }
//   return response.json();
// }

export { fetchAllPosts, searchPosts, fetchPost };
