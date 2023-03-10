import axios from "axios";
import token from "../utils/token";

import {
  loadUserData as _loadUserData,
  registerUser as _registerUser,
  loginUser as _loginUser,
  verifyTokenUrl,
} from "./urls";

export const verifyToken = async () => {
  const config = {
    headers: {
      Authorization: "Bearer " + token.get(),
    },
  };
  const res = await axios.get(verifyTokenUrl, config);
  return res.data;
};

export const registerUser = (username, password) => {
  const config_headers = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  const body = JSON.stringify({ username, password });

  return axios.post(_registerUser, body, config_headers);
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
