const baseURL = "http://localhost:3000";

export const fetchWithToken = (endpoint, data, method = "GET") => {
  const url = `${baseURL}/${endpoint}`; // http://localhost:3000/users
  const token = localStorage.getItem("token") || "";

  if (method === "GET") {
    return fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
  }
};
