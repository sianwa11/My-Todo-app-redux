import React from "react";

const TaskContext = React.createContext({
  tasks: [],
  addTask: (name) => {},
  editTask: (id, name) => {},
  deleteTask: (id) => {},
  toggleComplete: (id) => {},
});

export default TaskContext;
