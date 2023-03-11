const token = {
  get: () => {
    const token = localStorage.getItem("token");
    console.log("token", token);

    return token;
  },
  set: (token) => {
    localStorage.setItem("token", token);
  },
};

export default token;
