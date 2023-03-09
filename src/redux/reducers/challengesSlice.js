import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "30-Day Plank Challenge",
    content:
      "Complete a plank exercise for 30 consecutive days, increasing the time by 5 seconds each day.",
    userId: "123",
    endAt: "2023-04-08T12:00:00Z",
    createdAt: "2023-03-01T09:23:45Z",
    updatedAt: "2023-03-08T16:42:12Z",
  },
  {
    id: "2",
    title: "100 Pushups Challenge",
    content:
      "Complete 100 pushups in a single day, increasing the number by 5 each day.",
    userId: "456",
    endAt: "2023-05-01T00:00:00Z",
    createdAt: "2023-02-28T15:30:00Z",
    updatedAt: "2023-03-07T11:15:30Z",
  },
  {
    id: "3",
    title: "30-Day Yoga Challenge",
    content:
      "Complete a 30-day yoga challenge, practicing a different pose each day.",
    userId: "789",
    endAt: "2023-04-01T18:00:00Z",
    createdAt: "2023-03-03T10:00:00Z",
    updatedAt: "2023-03-09T08:30:45Z",
  },
];

export const challengesSlice = createSlice({
  name: "challenges",
  initialState,
  reducers: {
    setChallenges: (state, action) => {
      return {
        ...action.payload,
      };
    },
  },
});

export const { setChallenges } = challengesSlice.actions;

export default challengesSlice.reducer;
