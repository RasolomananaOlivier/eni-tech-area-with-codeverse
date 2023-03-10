import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "54321",
    title: "What are some good beginner-friendly programming languages?",
    description:
      "I am new to programming and want to start learning a language that is easy to understand and has a lot of resources available. What are some good options?",
    userId: "98765",
    createdAt: "2022-12-01T09:30:00Z",
    updatedAt: "2022-12-01T09:30:00Z",
  },
  {
    id: "54322",
    title: "What are the best practices for database design?",
    description:
      "I am working on a project that involves creating a database and want to ensure that I am following best practices for design. What are some tips or resources I should be aware of?",
    userId: "98766",
    createdAt: "2022-12-02T11:45:00Z",
    updatedAt: "2022-12-02T11:45:00Z",
  },
  {
    id: "54323",
    title: "How can I improve my public speaking skills?",
    description:
      "I have a fear of public speaking but want to overcome it to advance in my career. What are some tips or techniques that can help me improve my skills?",
    userId: "98767",
    createdAt: "2022-12-03T14:15:00Z",
    updatedAt: "2022-12-03T14:15:00Z",
  },
  {
    id: "54324",
    title: "What are some good resources for learning machine learning?",
    description:
      "I am interested in learning about machine learning and want to know what are some good resources, both online and offline, that I can use to get started.",
    userId: "98768",
    createdAt: "2022-12-04T16:30:00Z",
    updatedAt: "2022-12-04T16:30:00Z",
  },
  {
    id: "54325",
    title: "What are some effective ways to manage stress?",
    description:
      "I have been experiencing high levels of stress lately and want to know what are some effective ways to manage it. What are some tips or techniques that can help?",
    userId: "98769",
    createdAt: "2022-12-05T19:00:00Z",
    updatedAt: "2022-12-05T19:00:00Z",
  },
  // More objects can be added here
];

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      return {
        ...action.payload,
      };
    },
  },
});

export const { setQuestions } = questionsSlice.actions;

export default questionsSlice.reducer;
