import { useState } from 'react';
import type { Todo } from '../types/todo';
import TodoItem from './TodoItem';
import './TodoApp.css';

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');
  
  const appName = import.meta.env.VITE_APP_NAME || 'MiniList';
  const maxTodos = parseInt(import.meta.env.VITE_MAX_TODOS || '100');

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    
    if (todos.length >= maxTodos) {
      alert(`Maximum ${maxTodos} todos allowed!`);
      return;
    }

    const newTodo: Todo = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      completed: false,
      createdAt: new Date(),
    };

    setTodos([newTodo, ...todos]);
    setInputValue('');
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id: string, newText: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  const toggleComplete = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="todo-app">
      <div className="todo-container">
        <header className="app-header">
          <h1 className="app-title">{appName}</h1>
          <p className="app-subtitle">Your minimalist task manager</p>
        </header>

        <form onSubmit={addTodo} className="todo-form">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="What needs to be done?"
            className="todo-input"
            maxLength={200}
          />
          <button type="submit" className="add-button">
            Add Task
          </button>
        </form>

        <div className="todo-stats">
          <span className="stat-item">
            Total: <strong>{todos.length}</strong>
          </span>
          <span className="stat-item">
            Active: <strong>{todos.filter(t => !t.completed).length}</strong>
          </span>
          <span className="stat-item">
            Completed: <strong>{todos.filter(t => t.completed).length}</strong>
          </span>
        </div>

        <div className="todo-list">
          {todos.length === 0 ? (
            <div className="empty-state">
              <p>No tasks yet. Add one to get started! ✨</p>
            </div>
          ) : (
            todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={deleteTodo}
                onEdit={editTodo}
                onToggle={toggleComplete}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
