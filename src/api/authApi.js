import axios from "axios";

import { loginUser as _loginUser, verifyTokenUrl } from "./urls";

export const verifyToken = async (token) => {
  const res = await axios.get(verifyTokenUrl, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return res.data;
};

export const loginUser = async (email, password) => {
  const config_headers = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  const body = { email, password };

  const res = await axios.post(_loginUser, body, config_headers);

  return res.data;
};
