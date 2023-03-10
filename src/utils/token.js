const token = {
  get: () => {
    const token = localStorage.getItem("token");
    console.log("token", token);
    if (token === null) {
      // throw new Error("Token not found");
      return "";
    }
    return token;
  },
  set: (token) => {
    localStorage.setItem("token", token);
  },
};

export default token;
