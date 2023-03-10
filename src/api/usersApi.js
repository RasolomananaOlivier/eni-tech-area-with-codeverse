import axios from "axios";
import { withAuthConfig } from "../config/headersConfig";

import { resetUserPasswordUrl, storeUserTagsUrl, userByIdUrl } from "./urls";

export const resetUserPassword = async (password, confirmedPassword) => {
  const res = await axios.post(resetUserPasswordUrl, withAuthConfig);
  return res.data;
};

export const storeUserTags = async (userId, tags) => {
  const res = await axios.post(
    storeUserTagsUrl.replace(":userId", userId),
    { tags },
    withAuthConfig
  );
  return res.data;
};

export const getUserById = async (userId) => {
  // console.log("userId", userId);
  const res = await axios.get(
    userByIdUrl.replace(":userId", userId),
    withAuthConfig
  );
  return res.data;
};
