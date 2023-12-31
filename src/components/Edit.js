import React from "react";
import { BsSave } from "react-icons/bs";

const Edit = ({
  isEditing,
  editedTodoId,
  editedTodoTitle,
  editedTodoDescription,
  setEditedTodoTitle,
  setEditedTodoDescription,
  handleSaveEditedTodo,
}) => {
  if (!isEditing) {
    return null;
  }

  const handleSave = () => {
    handleSaveEditedTodo(editedTodoId);
  };

  return (
    <div className="todo-list-item">
      <input
      className="todo-input-item"
        type="text"
        value={editedTodoTitle}
        onChange={(e) => setEditedTodoTitle(e.target.value)}
      />
      <input
        value={editedTodoDescription}
        onChange={(e) => setEditedTodoDescription(e.target.value)}
      />
      <BsSave onClick={handleSave} title="Save" className="icon" />
    </div>
  );
};

export default Edit;
