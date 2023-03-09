import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

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
