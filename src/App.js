import React, { useEffect, useState } from "react";
import Container from "./components/Container/Container";
import Form from "./components/Form/Form";
import Popup from "./components/Popup/Popup";
import ToDoList from "./components/ToDo/ToDoList";

function App() {
  const [showPopup, setPopup] = useState({ status: false, msg: "" });

  const showPopupHandler = (msg) => {
    setPopup({ status: true, msg });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopup({ status: false, msg: "" });
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [showPopup]);

  return (
    <React.Fragment>
      {showPopup.status ? <Popup message={showPopup.msg} /> : ""}

      <Container>
        <Form onNotice={showPopupHandler} />

        <ToDoList onNotice={showPopupHandler} />
      </Container>
    </React.Fragment>
  );
}

export default App;
