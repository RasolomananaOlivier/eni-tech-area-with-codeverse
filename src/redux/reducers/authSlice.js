import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      return {
        ...action.payload,
      };
    },
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
