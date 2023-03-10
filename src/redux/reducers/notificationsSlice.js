import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    userId: "555",
    content: {
      type: "comment",
      questionId: 1,
      questionBy: 1,
      answerId: 2,
      answerBy: 1,
      initiateBy: 2,
      content:
        "Debitis provident quod. Nostrum nobis blanditiis. Impedit occaecati ut maxime ut magnam rerum sed. Asperiores est quos.",
    },
    createdAt: "2022-12-02T10:30:00Z",
    updatedAt: "2022-12-02T10:30:00Z",
  },
  {
    id: "2",
    userId: "556",
    content: {
      type: "answer",
      questionId: 3,
      questionBy: 1,
      initiateBy: 2,
      content: "Quia perspiciatis quaerat quaerat est.",
    },
    createdAt: "2022-12-02T13:00:00Z",
    updatedAt: "2022-12-02T13:00:00Z",
  },
  {
    id: "3",
    userId: "557",
    content: {
      type: "event",
      eventId: 2,
      content:
        "Eius ullam fugit harum porro distinctio unde nobis praesentium.",
    },
    createdAt: "2022-12-03T15:00:00Z",
    updatedAt: "2022-12-03T15:00:00Z",
  },
  {
    id: "4",
    userId: "558",
    content: {
      type: "vote",
      questionId: 3,
      questionBy: 1,
      answerId: 20,
      answerBy: 2,
      initiateBy: 1,
      voteType: "up",
    },
    createdAt: "2022-12-05T10:45:00Z",
    updatedAt: "2022-12-05T10:45:00Z",
  },
  {
    id: "5",
    userId: "559",
    content: "You have been mentioned by David in his post.",
    createdAt: "2022-12-06T08:30:00Z",
    updatedAt: "2022-12-06T08:30:00Z",
  },
  {
    id: "4",
    userId: "558",
    content: {
      type: "challengeAnswer",
      challengeId: 3,
      challengeBy: 1,
      initiateBy: 20,
      content: 2,
    },
    createdAt: "2022-12-05T10:45:00Z",
    updatedAt: "2022-12-05T10:45:00Z",
  },
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
