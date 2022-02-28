import React from "react";
import ReactDOM from "react-dom";

// import { FcCheckmark, FcCancel } from "react-icons/fc";

import styles from "./Popup.module.scss";

const Popup = (props) => {
  const className = `${styles.popup} ${styles["animate-notice"]}`;

  return ReactDOM.createPortal(
    <div className={className}>{props.message}</div>,
    document.getElementById("pop-up")
  );
};

export default Popup;
