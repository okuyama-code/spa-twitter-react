import { SEARCH_API_URL } from "../../constants";

async function searchPosts(query) {
  // api/v1/search + /posts/?q=t...
  const response = await fetch(`${SEARCH_API_URL}/posts/?q=${query}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

export { searchPosts };
