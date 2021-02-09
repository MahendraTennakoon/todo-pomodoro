export const getAllToDos = () => {
  return JSON.parse(window.localStorage.getItem("toDos"));
};

export const saveToDos = (toDos) => {
  window.localStorage.setItem("toDos", JSON.stringify(toDos));
};

export const deleteToDo = (id) => {
  const toDos = getAllToDos();
  const index = toDos.findIndex((toDo) => toDo.id === id);
  toDos.splice(index, 1);
  saveToDos(toDos);
};
