import axios from "axios";
import token from "../utils/token";
import {
  createChallengeUrl,
  getChallengeByIdUrl,
  getChallengesUrl,
  getUserChallengesUrl,
} from "./urls";

export const getChallenges = async () => {
  const config = {
    headers: {
      Authorization: "Bearer " + token.get(),
    },
  };

  const res = await axios.get(getChallengesUrl, config);
  return res.data;
};

export const getChallengeById = async (challengeId) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token.get(),
    },
  };

  const res = await axios.get(
    getChallengeByIdUrl.replace(":challengeId", challengeId),
    config
  );
  return res.data;
};

export const createChallenge = async (challengeData) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token.get(),
    },
  };

  const res = await axios.post(createChallengeUrl, challengeData, config);
  return res.data;
};

export const getUserChallenges = async (userId) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token.get(),
    },
  };

  const res = await axios.get(
    getUserChallengesUrl.replace(":userId", userId),
    config
  );
  return res.data;
};
