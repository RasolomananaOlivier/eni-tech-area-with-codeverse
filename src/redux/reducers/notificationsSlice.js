import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    type: "like",
    userId: "555",
    content: "Your post has been liked by John.",
    createdAt: "2022-12-02T10:30:00Z",
    updatedAt: "2022-12-02T10:30:00Z",
  },
  {
    id: "2",
    type: "follow",
    userId: "556",
    content: "You have a new follower! Jane is now following you.",
    createdAt: "2022-12-02T13:00:00Z",
    updatedAt: "2022-12-02T13:00:00Z",
  },
  {
    id: "3",
    type: "comment",
    userId: "557",
    content: "Your post has received a new comment from Peter.",
    createdAt: "2022-12-03T15:00:00Z",
    updatedAt: "2022-12-03T15:00:00Z",
  },
  {
    id: "4",
    type: "message",
    userId: "558",
    content: "You have a new message from Sarah.",
    createdAt: "2022-12-05T10:45:00Z",
    updatedAt: "2022-12-05T10:45:00Z",
  },
  {
    id: "5",
    type: "mention",
    userId: "559",
    content: "You have been mentioned by David in his post.",
    createdAt: "2022-12-06T08:30:00Z",
    updatedAt: "2022-12-06T08:30:00Z",
  },
  // More objects can be added here
];

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setNotifications: (state, action) => {
      return {
        ...action.payload,
      };
    },
    addNotification: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setNotifications } = notificationsSlice.actions;

export default notificationsSlice.reducer;
