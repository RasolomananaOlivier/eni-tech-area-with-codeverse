import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "54321",
  email: "john.doe@example.com",
  name: {
    first: "John",
    last: "Doe",
    full: "John Doe",
  },
  password: "Passw0rd!",
  imageUrl: "https://randomuser.me/api/portraits/men/72.jpg",
  role: "User",
  level: "Intermediate",
  gender: "Male",
  tags: ["react", "html"],
  description:
    "I am a software developer who loves to play music in my free time.",
  createdAt: "2022-12-01T09:30:00Z",
  updatedAt: "2023-03-09T14:20:00Z",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...action.payload,
      };
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
