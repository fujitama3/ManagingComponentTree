import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setDone] = useState(false);

  function handleClick() {}

  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
