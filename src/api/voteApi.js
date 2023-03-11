import axios from "axios";
import token from "../utils/token";

import { createVoteUrl, getVotesCountUrl } from "./urls";

export const createVote = async (questionId, answerId) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token.get(),
    },
  };
  const res = await axios.post(
    createVoteUrl
      .replace(":questionId", questionId)
      .replace(":answerId", answerId),
    { type: "up" },
    config
  );

  return res.data;
};

export const countVotes = async (questionId, answerId) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token.get(),
    },
  };

  const res = await axios.get(
    getVotesCountUrl
      .replace(":questionId", questionId)
      .replace(":answerId", answerId),
    config
  );

  return res.data;
};
