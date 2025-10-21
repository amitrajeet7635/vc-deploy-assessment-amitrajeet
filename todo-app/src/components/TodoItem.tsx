import { useState } from 'react';
import type { Todo, Category } from '../types/todo';
import { CATEGORIES } from '../types/todo';
import './TodoItem.css';

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string, newCategory?: Category) => void;
  onToggle: (id: string) => void;
}

function TodoItem({ todo, onDelete, onEdit, onToggle }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [editCategory, setEditCategory] = useState<Category>(todo.category);

  const handleEdit = () => {
    if (editText.trim() === '') {
      setEditText(todo.text);
      setEditCategory(todo.category);
      setIsEditing(false);
      return;
    }
    onEdit(todo.id, editText.trim(), editCategory);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      setEditText(todo.text);
      setEditCategory(todo.category);
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
        <div className="todo-edit-container">
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
          <select 
            value={editCategory}
            onChange={(e) => setEditCategory(e.target.value as Category)}
            className="category-select-edit"
          >
            {CATEGORIES.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div className="todo-content">
          <span className="todo-text" onDoubleClick={() => setIsEditing(true)}>
            {todo.text}
          </span>
          <span className={`category-tag category-${todo.category.toLowerCase()}`}>
            {todo.category}
          </span>
        </div>
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
