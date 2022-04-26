import React from "react";
import "./ToDoItem.style.css"

const TodoItem = ({ todo }) => {
  return (
    <>
      <div className="todo_item">
        <input type="checkbox" />
        {todo}
      </div>
    </>
  );
};

export default TodoItem;