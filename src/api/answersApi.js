import axios from "axios";
import token from "../utils/token";
import { createAnswerUrl, getAnswersUrl } from "./urls";

export const getAnswers = async (questionId) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token.get(),
    },
  };

  const res = await axios.get(
    getAnswersUrl.replace(":questionId", questionId),
    config
  );
  return res.data;
};

export const createAnswer = async (questionId, content) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token.get(),
    },
  };

  const res = await axios.post(
    createAnswerUrl.replace(":questionId", { content }, questionId),
    config
  );
  return res.data;
};
