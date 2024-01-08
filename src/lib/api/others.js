import Cookies from "js-cookie"
import client from "./client"

export const fetchNotifications = () => {
  return client.get("/notifications")
}

export const fetchGroups = () => {
  return client.get("/groups", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    }
  })
}

// export const fetchGroup = () => {

// }

export const createGroupe = (params) => {
  return client.post("/groups", params, {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    }
  })
}
