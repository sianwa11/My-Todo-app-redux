import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Learn Redux", completed: true },
  { id: "2", name: "Make application", completed: false },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      state.push(action.payload);
    },
    deleteTask(state, action) {},
    editTask(state, action) {},
    toggleComplete(state, action) {},
  },
});

export const { addTask, deleteTask, editTask, toggleComplete } =
  taskSlice.actions;

export default taskSlice.reducer;
