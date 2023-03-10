import axios from "axios";
import { getCommentsUrl } from "./urls";

export const getComments = async (questionId, answerId) => {
  const res = await axios.get(
    getCommentsUrl
      .replace(":questionId", questionId)
      .replace(":answerId", answerId)
  );
  return res.data;
};
