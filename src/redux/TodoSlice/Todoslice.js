import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const todoSlise = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodos(state, action) {
      state.todos.push({
        id: nanoid(),
        text: action.payload.text,
        completed: false,
      });
    },
    deleteTodos(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
    toggleTodos(state, action) {
      const toggleTodo = state.todos.find(
        todo => todo.id === action.payload.id
      );
      toggleTodo.completed = !toggleTodo.completed;
    },
  },
});

export const { addTodos, deleteTodos, toggleTodos } = todoSlise.actions;
