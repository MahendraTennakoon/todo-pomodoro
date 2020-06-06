import React from "react";

export default function ToDoList(props) {
  const { toDos } = props;
  return (
    <ol>
      {toDos.map((toDo, index) => (
        <li key={index}>{toDo}</li>
      ))}
    </ol>
  );
}
