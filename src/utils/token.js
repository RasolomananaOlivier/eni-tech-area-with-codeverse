const token = {
  get: () => {
    const token = localStorage.getItem("token");

    if (token === null) {
      throw new Error("Token not found");
    }
    return token;
  },
  set: (token) => {
    localStorage.setItem("token", token);
  },
};

export default token;
