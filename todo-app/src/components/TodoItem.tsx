import { useState } from 'react';
import type { Todo } from '../types/todo';
import './TodoItem.css';

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
  onToggle: (id: string) => void;
}

function TodoItem({ todo, onDelete, onEdit, onToggle }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() === '') {
      setEditText(todo.text);
      setIsEditing(false);
      return;
    }
    onEdit(todo.id, editText.trim());
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="todo-checkbox"
      />
      
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={handleKeyDown}
          className="todo-edit-input"
          autoFocus
          maxLength={200}
        />
      ) : (
        <span className="todo-text" onDoubleClick={() => setIsEditing(true)}>
          {todo.text}
        </span>
      )}

      <div className="todo-actions">
        {!isEditing && (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="edit-button"
              title="Edit"
            >
              ✏️
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="delete-button"
              title="Delete"
            >
              🗑️
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
