import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "54321",
  title: "What are some good beginner-friendly programming languages?",
  description:
    "I am new to programming and want to start learning a language that is easy to understand and has a lot of resources available. What are some good options?",
  userId: "98765",
  createdAt: "2022-12-01T09:30:00Z",
  updatedAt: "2022-12-01T09:30:00Z",
};

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setQuestion: (state, action) => {
      return {
        ...action.payload,
      };
    },
  },
});

export const { setQuestion } = questionSlice.actions;

export default questionSlice.reducer;
