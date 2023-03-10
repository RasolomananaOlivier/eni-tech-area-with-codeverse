import axios from "axios";
import { withAuthConfig } from "../config/headersConfig";

import { questionsByUserTags } from "./urls";

export const getQuestionsByUserTags = async () => {
  const res = await axios.get(questionsByUserTags, withAuthConfig);
  return res.data;
};
