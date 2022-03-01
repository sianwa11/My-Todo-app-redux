import React, { useRef, useState } from "react";

import { FaTrash, FaEdit, FaSave, FaArrowLeft } from "react-icons/fa";
import styles from "./ListItem.module.scss";

import { useDispatch } from "react-redux";
import {
  deleteTask,
  editTask,
  toggleComplete,
} from "../../../tasks/tasksSlice";

const ListItem = (props) => {
  const [iseditTask, setEditTask] = useState(false);
  const dispatch = useDispatch();

  const inputEl = useRef(null);

  const deleteItemHandler = (id) => {
    // taskCtx.deleteTask(id);
    dispatch(deleteTask({ id: id }));
  };

  const editItemHandler = (id) => {
    const name = inputEl.current.value;

    if (name === "") {
      props.onNotice("Task cannot be empty");
      return;
    }

    // taskCtx.editTask(id, name);
    dispatch(editTask({ name, id }));
  };

  const toggleCompleteHandler = (id) => {
    // taskCtx.toggleComplete(id);
    dispatch(toggleComplete({ id }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    setEditTask(false);
  };

  const editTemplate = (
    <>
      <form className={styles.form__items} onSubmit={onSubmitHandler}>
        <div className={styles.form__input}>
          <input
            type="text"
            className={styles["form__input--text"]}
            ref={inputEl}
          />
        </div>

        <div className={styles.form__buttons}>
          <button
            className={styles["move-up"]}
            onClick={editItemHandler.bind(null, props.id)}
          >
            <FaSave />
          </button>

          <i className={styles["move-up"]}>
            <FaArrowLeft />
          </i>
        </div>
      </form>
    </>
  );

  const itemsTemplate = (
    <>
      <div className={styles.item__inputs}>
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={toggleCompleteHandler.bind(null, props.id)}
        />
        <div className={styles["item__inputs--name"]}>{props.name}</div>
      </div>

      <div className={styles.item__buttons}>
        <i
          className={styles["move-up"]}
          onClick={() => {
            setEditTask(true);
          }}
        >
          <FaEdit />
        </i>
        <i
          className={styles["move-up"]}
          onClick={deleteItemHandler.bind(null, props.id)}
        >
          <FaTrash />
        </i>
      </div>
    </>
  );

  return iseditTask ? (
    <li className={styles.form}>{editTemplate}</li>
  ) : (
    <li className={styles.item}>{itemsTemplate}</li>
  );
};

export default ListItem;
