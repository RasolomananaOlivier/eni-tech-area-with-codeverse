import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import questionReducer from "./reducers/questionSlice";
import questionsReducer from "./reducers/questionsSlice";
import answersReducer from "./reducers/answersSlice";
import commentsReducer from "./reducers/commentsSlice";
import notificationsReducer from "./reducers/notificationsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    question: questionReducer,
    questions: questionsReducer,
    answers: answersReducer,
    comments: commentsReducer,
    notifications: notificationsReducer,
  },
});
