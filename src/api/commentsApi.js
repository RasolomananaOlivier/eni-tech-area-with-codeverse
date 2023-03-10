import axios from "axios";
import token from "../utils/token";
import { createCommentUrl, getCommentsUrl } from "./urls";

export const getComments = async (questionId, answerId) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token.get(),
    },
  };

  const res = await axios.get(
    getCommentsUrl
      .replace(":questionId", questionId)
      .replace(":answerId", answerId),
    config
  );
  return res.data;
};

export const createComment = async (questionId, answerId, content) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token.get(),
    },
  };

  const res = await axios.get(
    createCommentUrl
      .replace(":questionId", questionId)
      .replace(":answerId", answerId),
    { content },
    config
  );
  return res.data;
};
