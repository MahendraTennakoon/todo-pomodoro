export const saveToDos = (toDos) => {
  window.localStorage.setItem("toDos", JSON.stringify(toDos));
};

export const getAllToDos = () => {
  return JSON.parse(window.localStorage.getItem("toDos"));
};
