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

export const fetchGroup = (id) => {
  return client.get(`/groups/${id}`, {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    }
  })
}

export const createGroupe = (params) => {
  return client.post("/groups", params, {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    }
  })
}

export const createMessage = (group_id) => {
  return client.post(`/groups/${group_id}/messages`, {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    }
  })
}
