import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const deleteTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      {todos.length > 0 ? (
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      ) : (
        <p>No todos yet</p>
      )}
    </div>
  );
}

export default App;
