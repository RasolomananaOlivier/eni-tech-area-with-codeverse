import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "How many planets are in the solar system?",
    question: "How many planets are there in the solar system as of 2023?",
    answer: "As of 2023, there are eight planets in the solar system.",
    difficulty: "easy",
    userId: "123",
    endAt: "2023-04-10",
    createdAt: "2023-03-01T14:30:00Z",
    updatedAt: "2023-03-05T10:15:00Z",
  },
  {
    id: "2",
    title: "What is the capital of France?",
    question: "What is the capital city of France?",
    answer: "The capital city of France is Paris.",
    difficulty: "easy",
    userId: "456",
    endAt: "2023-04-15",
    createdAt: "2023-03-02T09:45:00Z",
    updatedAt: "2023-03-06T12:20:00Z",
  },
  {
    id: "3",
    title: "What is the largest country in the world?",
    question: "Which country has the largest land area in the world?",
    answer: "Russia has the largest land area of any country in the world.",
    difficulty: "medium",
    userId: "789",
    endAt: "2023-04-20",
    createdAt: "2023-03-03T16:00:00Z",
    updatedAt: "2023-03-07T08:30:00Z",
  },
  {
    id: "4",
    title: "What is the capital of Australia?",
    question: "What is the capital city of Australia?",
    answer: "The capital city of Australia is Canberra.",
    difficulty: "easy",
    userId: "123",
    endAt: "2023-04-25",
    createdAt: "2023-03-04T10:00:00Z",
    updatedAt: "2023-03-08T11:45:00Z",
  },
  {
    id: "5",
    title: "What is the highest mountain in the world?",
    question: "What is the name of the highest mountain in the world?",
    answer: "Mount Everest is the highest mountain in the world.",
    difficulty: "difficult",
    userId: "456",
    endAt: "2023-04-30",
    createdAt: "2023-03-05T13:15:00Z",
    updatedAt: "2023-03-09T09:20:00Z",
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
