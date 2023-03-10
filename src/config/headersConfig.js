import token from "../utils/token";

export const withAuthConfig = {
  headers: {
    Authorization: "Bearer " + token.get(),
  },
};
