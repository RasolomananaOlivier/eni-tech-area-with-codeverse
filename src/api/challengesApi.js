import axios from "axios";
import token from "../utils/token";
import { getChallengesUrl } from "./urls";

export const getChallenges = async () => {
  const config = {
    headers: {
      Authorization: "Bearer " + token.get(),
    },
  };
  const res = await axios.get(getChallengesUrl, config);
  return res.data;
};

export const createChallenges = async (challengeData) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token.get(),
    },
  };
  const res = await axios.post(getChallengesUrl, challengeData, config);
  return res.data;
};
