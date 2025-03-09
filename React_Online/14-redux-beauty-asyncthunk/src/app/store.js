import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import todoReducer from '../features/todo/todoSlice'

const store = configureStore({
  reducer: {
    posts: postsReducer,
    todoCarrier: todoReducer,

  },
});

export default store;