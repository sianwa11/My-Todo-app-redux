import React, { useContext, useState } from "react";
import TaskContext from "../../tasks/task-context";
import ListItem from "./ListItem/ListItem";

import styles from "./ToDo.module.scss";
import Filter from "../Input/Filter";

import { useSelector } from "react-redux";

const FILTER_TASKS = {
  All: () => true,
  Complete: (task) => task.completed,
  Pending: (task) => !task.completed,
};

const ToDoList = (props) => {
  const [filter, setFilter] = useState("All");

  const taskCtx = useContext(TaskContext);
  const tasks = useSelector((state) => state.tasks);

  const filterHandler = (e) => {
    setFilter(e.target.value);
  };

  const renderedTasks = tasks
    .filter(FILTER_TASKS[filter])
    .map((task) => (
      <ListItem
        key={task.id}
        id={task.id}
        name={task.name}
        onNotice={props.onNotice}
        completed={task.completed}
      />
    ));

  return (
    <>
      <div className={styles.todo}>
        <Filter filter={filter} onChange={filterHandler} />

        <div>
          <ul className={styles.todo__list}>{renderedTasks}</ul>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
