import axios from "axios";
import token from "../utils/token";

import {
  createQuestionUrl,
  getQuestionByIdUrl,
  getQuestionsUrl,
  getQuestionTagsUrl,
  getUserQuestionsUrl,
  questionsByUserTagsUrl,
} from "./urls";

export const getQuestionsByUserTags = async () => {
  const config = {
    headers: {
      Authorization: "Bearer " + token.get(),
    },
  };

  const res = await axios.get(questionsByUserTagsUrl, config);
  return res.data;
};

// TODO: Provide valid questionData
export const createQuestion = async (questionData) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token.get(),
    },
  };

  const res = await axios.post(createQuestionUrl, questionData, config);
  return res.data;
};

// TODO: test
export const getQuestions = async () => {
  const config = {
    headers: {
      Authorization: "Bearer " + token.get(),
    },
  };

  const res = await axios.get(getQuestionsUrl, config);
  return res.data;
};

export const getQuestionById = async (questionId) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token.get(),
    },
  };

  const res = await axios.get(
    getQuestionByIdUrl.replace(":questionId", questionId),
    config
  );
  return res.data;
};

export const getUserQuestions = async (userId) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token.get(),
    },
  };

  const res = await axios.get(
    getUserQuestionsUrl.replace(":userId", userId),
    config
  );
  // console.log("called", res);
  return res.data;
};

export const getQuestionTags = async (questionId) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token.get(),
    },
  };

  const res = await axios.get(
    getQuestionTagsUrl.replace(":questionId", questionId),
    config
  );

  return res.data;
};
