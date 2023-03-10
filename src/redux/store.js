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

import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const reducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  question: questionReducer,
  questions: questionsReducer,
  answers: answersReducer,
  comments: commentsReducer,
  notifications: notificationsReducer,
  challenges: challengesReducer,
  challenge: challengeReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
