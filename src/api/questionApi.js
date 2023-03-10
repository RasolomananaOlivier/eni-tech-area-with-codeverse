import axios from "axios";
import token from "../utils/token";

import { questionsByUserTags } from "./urls";

export const getQuestionsByUserTags = async () => {
  const config = {
    headers: {
      Authorization: "Bearer " + token.get(),
    },
  };

  const res = await axios.get(questionsByUserTags, config);
  return res.data;
};

// TODO: Provide valid questionData
export const createQuestion = async (questionData) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token.get(),
    },
  };

  const res = await axios.post(questionsByUserTags, questionData, config);
  return res.data;
};
