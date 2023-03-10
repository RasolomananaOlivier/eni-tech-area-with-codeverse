import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    userId: "555",
    answerId: "123456",
    content:
      "Thanks for the suggestion! I've been interested in learning Python and will definitely give it a try.",
    createdAt: "2022-12-02T10:30:00Z",
    updatedAt: "2022-12-02T10:30:00Z",
  },
  {
    id: "2",
    userId: "556",
    answerId: "123457",
    content: "Great tips for database design, thank you!",
    createdAt: "2022-12-02T13:00:00Z",
    updatedAt: "2022-12-02T13:00:00Z",
  },
  {
    id: "3",
    userId: "557",
    answerId: "123458",
    content:
      "I'll definitely check out Toastmasters, thanks for the suggestion!",
    createdAt: "2022-12-03T15:00:00Z",
    updatedAt: "2022-12-03T15:00:00Z",
  },
  {
    id: "4",
    userId: "558",
    answerId: "123459",
    content:
      "I've been wanting to learn more about machine learning, so this is helpful. Thanks!",
    createdAt: "2022-12-05T10:45:00Z",
    updatedAt: "2022-12-05T10:45:00Z",
  },
  {
    id: "5",
    userId: "559",
    answerId: "123460",
    content: "These are great tips for managing stress, I appreciate it!",
    createdAt: "2022-12-06T08:30:00Z",
    updatedAt: "2022-12-06T08:30:00Z",
  },
  // More objects can be added here
];

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments: (state, action) => {
      return {
        ...action.payload,
      };
    },
  },
});

export const { setComments } = commentsSlice.actions;

export default commentsSlice.reducer;
