
async function searchPosts(query) {
  // api/v1/search + /posts/?q=t...
  const response = await fetch(`http://localhost:3000/api/v1/search/?q=${query}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

export { searchPosts };
