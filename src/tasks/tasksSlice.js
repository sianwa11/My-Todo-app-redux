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
    deleteTask(state, action) {
      const { id } = action.payload;
      console.log(id);
      return state.filter((task) => task.id !== id);
    },
    editTask(state, action) {
      const { name, id } = action.payload;
      const editedTask = state.map((task) => {
        if (task.id === id) {
          return { ...task, name: name };
        }
        return task;
      });

      return editedTask;
    },
    toggleComplete(state, action) {
      const { id } = action.payload;
      const toggledTask = state.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });

      return toggledTask;
    },
  },
});

export const { addTask, deleteTask, editTask, toggleComplete } =
  taskSlice.actions;

export default taskSlice.reducer;
