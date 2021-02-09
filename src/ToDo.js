import React from "react";
import PropTypes from "prop-types";

const ToDo = ({ toDo, deleteToDo }) => {
  const handleClickDelete = () => {
    deleteToDo(toDo.id);
  };
  return (
    <div>
      <li>{toDo.description}</li>
      <button onClick={handleClickDelete}>Delete</button>
    </div>
  );
};

ToDo.propTypes = {
  toDo: PropTypes.object.isRequired,
  deleteToDo: PropTypes.func.isRequired,
};

export default ToDo;
