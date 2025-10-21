import { useState } from 'react';
import type { Todo, Category } from '../types/todo';
import { CATEGORIES } from '../types/todo';
import TodoItem from './TodoItem';
import './TodoApp.css';

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('General');
  const [filterCategory, setFilterCategory] = useState<Category | 'All'>('All');
  
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
      category: selectedCategory,
    };

    setTodos([newTodo, ...todos]);
    setInputValue('');
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id: string, newText: string, newCategory?: Category) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText, ...(newCategory && { category: newCategory }) } : todo
    ));
  };

  const toggleComplete = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Filter todos based on selected category
  const filteredTodos = filterCategory === 'All' 
    ? todos 
    : todos.filter(todo => todo.category === filterCategory);

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
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as Category)}
            className="category-select"
          >
            {CATEGORIES.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button type="submit" className="add-button">
            Add Task
          </button>
        </form>

        <div className="category-filters">
          <button
            className={`filter-btn ${filterCategory === 'All' ? 'active' : ''}`}
            onClick={() => setFilterCategory('All')}
          >
            All ({todos.length})
          </button>
          {CATEGORIES.map(category => (
            <button
              key={category}
              className={`filter-btn filter-${category.toLowerCase()} ${filterCategory === category ? 'active' : ''}`}
              onClick={() => setFilterCategory(category)}
            >
              {category} ({todos.filter(t => t.category === category).length})
            </button>
          ))}
        </div>

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
          {filteredTodos.length === 0 ? (
            <div className="empty-state">
              <p>{todos.length === 0 ? 'No tasks yet. Add one to get started! ✨' : `No tasks in ${filterCategory} category.`}</p>
            </div>
          ) : (
            filteredTodos.map(todo => (
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
