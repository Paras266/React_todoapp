import React from "react";

const TodoItem = ({
  title,
  description,
  iscreated,
  updateHandler,
  deleteHandler,
  id,
}) => {
  return (
    <div className="todo">
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div>
        <input
          onChange={() => updateHandler(id)}
          type="checkbox"
          checked={iscreated}
        />
        <button onClick={() => deleteHandler(id)} className="btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
