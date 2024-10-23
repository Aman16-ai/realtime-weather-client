import { USER_ALERT_API } from "./API";

export const createUserAlertSerivce = async (payload) => {
  const response = await fetch(USER_ALERT_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload), // Convert form data to JSON
  });
  const result = await response.json()
  return result
};
