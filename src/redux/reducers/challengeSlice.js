import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "1",
  title: "How many planets are in the solar system?",
  question: "How many planets are there in the solar system as of 2023?",
  answer: "As of 2023, there are eight planets in the solar system.",
  difficulty: "easy",
  userId: "123",
  endAt: "2023-04-10",
  createdAt: "2023-03-01T14:30:00Z",
  updatedAt: "2023-03-05T10:15:00Z",
};

export const challengeSlice = createSlice({
  name: "challenge",
  initialState,
  reducers: {
    setChallenge: (state, action) => {
      return {
        ...action.payload,
      };
    },
  },
});

export const { setChallenge } = challengeSlice.actions;

export default challengeSlice.reducer;
