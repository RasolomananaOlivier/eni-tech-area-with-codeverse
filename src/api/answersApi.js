import axios from "axios";
import { getAnswersUrl } from "./urls";

export const getAnswers = async (questionId) => {
  const res = await axios.get(
    getAnswersUrl.replace("{questionId}", questionId)
  );
  return res.data;
};
