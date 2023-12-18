import client from "./client"

//  base http://localhost:3000/api/v1

export const createTweet = (params) => {
  return client.post("/tweets", params);
}

export const imageUpload = (params) => {
  return client.post("/images", params);
}

export const getTweets = () => {
  return client.get("/tweets");
}

// TODO ここのparamsであっているのか疑問
export const getTweet = (params) => {
  return client.get("/tweets/:id", params);
}
