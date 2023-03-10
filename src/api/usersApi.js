import axios from "axios";
import { withAuthConfig } from "../config/headersConfig";
import token from "../utils/token";

import {
  resetUserPasswordUrl,
  storeUserTagsUrl,
  userByIdUrl,
  userChallengesUrl,
} from "./urls";

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

export const getUserChallenges = async (userId) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token.get(),
    },
  };
  const res = await axios.get(
    userChallengesUrl.replace(":userId", userId),
    config
  );
  return res.data;
};
