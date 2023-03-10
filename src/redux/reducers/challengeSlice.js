import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "1",
  title: "30-Day Plank Challenge",
  content:
    "Complete a plank exercise for 30 consecutive days, increasing the time by 5 seconds each day.",
  userId: "123",
  endAt: "2023-04-08T12:00:00Z",
  createdAt: "2023-03-01T09:23:45Z",
  updatedAt: "2023-03-08T16:42:12Z",
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
