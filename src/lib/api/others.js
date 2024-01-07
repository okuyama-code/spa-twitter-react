import client from "./client"

export const fetchNotifications = () => {
  return client.get("/notifications")
}
