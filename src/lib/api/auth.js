import Cookies from "js-cookie";
import client from "./client";

const authHeaders = {
  "access-token": Cookies.get("_access_token"),
  client: Cookies.get("_client"),
  uid: Cookies.get("_uid"),
};

export const signUp = (params) => {
  return client.post("/users", params);
};

export const signIn = (params) => {
  return client.post("/users/sign_in", params);
};

export const getUser = () => {
  if (
    !Cookies.get("_access_token") ||
    !Cookies.get("_client") ||
    !Cookies.get("_uid")
  )
    return;
  return client.get("/sign_in", {
    headers: authHeaders,
  });
};
