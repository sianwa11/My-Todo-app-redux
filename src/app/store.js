import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../tasks/tasksSlice";

export default configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
