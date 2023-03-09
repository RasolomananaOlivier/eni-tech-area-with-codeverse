import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "123456",
    userId: "98765",
    questionId: "54321",
    content:
      "Python and JavaScript are two popular programming languages that are beginner-friendly and have a lot of resources available. I would recommend starting with one of those!",
    createdAt: "2022-12-01T10:30:00Z",
    updatedAt: "2022-12-01T10:30:00Z",
  },
  {
    id: "123457",
    userId: "98766",
    questionId: "54322",
    content:
      "Some best practices for database design include normalizing data, choosing appropriate data types, and creating indexes. You can find more tips and resources by searching online for 'database design best practices.'",
    createdAt: "2022-12-02T12:00:00Z",
    updatedAt: "2022-12-02T12:00:00Z",
  },
  {
    id: "123458",
    userId: "98767",
    questionId: "54323",
    content:
      "One effective way to improve public speaking skills is to practice in front of a mirror or with friends and family. You can also try joining a local Toastmasters club for additional support and feedback.",
    createdAt: "2022-12-03T14:30:00Z",
    updatedAt: "2022-12-03T14:30:00Z",
  },
  {
    id: "123459",
    userId: "98768",
    questionId: "54324",
    content:
      "Some good resources for learning machine learning include online courses such as Coursera or Udacity, as well as books such as 'Machine Learning for Dummies.' It's also important to practice with real-world datasets to gain experience.",
    createdAt: "2022-12-04T16:45:00Z",
    updatedAt: "2022-12-04T16:45:00Z",
  },
  {
    id: "123460",
    userId: "98769",
    questionId: "54325",
    content:
      "Some effective ways to manage stress include practicing mindfulness, exercise, and getting enough sleep. It can also be helpful to talk to a therapist or counselor for additional support and guidance.",
    createdAt: "2022-12-05T19:30:00Z",
    updatedAt: "2022-12-05T19:30:00Z",
  },
  // More objects can be added here
];

export const answersSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    setAnswers: (state, action) => {
      return {
        ...action.payload,
      };
    },
  },
});

export const { setAnswers } = answersSlice.actions;

export default answersSlice.reducer;
