import React from "react";

import ToDo from "./ToDo";

export default function ToDoList(props) {
  const { toDos, deleteToDo } = props;
  return (
    <ol>
      {toDos.map((toDo, index) => (
        <ToDo key={index} toDo={toDo} deleteToDo={deleteToDo} />
      ))}
    </ol>
  );
}
