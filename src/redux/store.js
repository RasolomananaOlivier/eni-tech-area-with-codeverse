import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import userReducer from "./reducers/userSlice";
import questionReducer from "./reducers/questionSlice";
import questionsReducer from "./reducers/questionsSlice";
import answersReducer from "./reducers/answersSlice";
import commentsReducer from "./reducers/commentsSlice";
import notificationsReducer from "./reducers/notificationsSlice";
import challengesReducer from "./reducers/challengesSlice";
import challengeReducer from "./reducers/challengeSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    question: questionReducer,
    questions: questionsReducer,
    answers: answersReducer,
    comments: commentsReducer,
    notifications: notificationsReducer,
    challenges: challengesReducer,
    challenge: challengeReducer,
  },
});
