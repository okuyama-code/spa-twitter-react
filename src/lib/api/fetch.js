async function fetchAllPosts(page = 1) {
  const response = await fetch(`http://localhost:3000/api/v1/posts?page=${page}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}


async function searchPosts(query, page=1) {
  // api/v1/search + /posts/?q=t...
  const response = await fetch(`http://localhost:3000/api/v1/search/?q=${query}&page=${page}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

export { fetchAllPosts, searchPosts };
