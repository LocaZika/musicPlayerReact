import { url } from "./config";
const send = async (method, path) => {
  const getData = await fetch(url + path, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await getData.json();
  return data;
};
export const get = (path) => {
  return send("GET", path);
};
