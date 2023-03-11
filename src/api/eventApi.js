import axios from "axios";
import token from "../utils/token";
import { getEventsUrl } from "./urls";

export const getEvents = async () => {
  const config = {
    headers: {
      Authorization: "Bearer " + token.get(),
    },
  };

  const res = await axios.get(getEventsUrl, config);

  return res.data;
};
