import React, { useState } from "react";
import Button from "../Button/Button";

import styles from "./Form.module.scss";

import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { addTask } from "../../tasks/tasksSlice";

const Form = (props) => {
  const [newTask, setTask] = useState("");

  const dispatch = useDispatch();

  const taskHandler = (e) => {
    setTask(e.target.value);
  };

  const addTaskHandler = (e) => {
    e.preventDefault();

    if (newTask === "") {
      props.onNotice(`Task cannot be empty `);
      return;
    }

    // taskCtx.addTask(newTask);
    dispatch(
      addTask({
        id: nanoid(),
        name: newTask,
        completed: false,
      })
    );
    setTask("");
  };
  return (
    <form className={styles.form} onSubmit={addTaskHandler}>
      <label className={styles.form__label}>Add Task</label>
      <input
        className={styles.form__input}
        onChange={taskHandler}
        type="text"
        value={newTask}
      />

      <Button name="Add Task" />
    </form>
  );
};

export default Form;
