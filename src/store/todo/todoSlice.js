import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};
export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },

    editTodo: (state, action) => {
      state.todos = state.todos.map((item) =>
        item.id === action.payload.id
          ? { ...item, title: action.payload.editValue }
          : item
      );
    },

    complateTodo: (state, action) => {
      state.todos = state.todos.map((item) =>
        item.id === action.payload
          ? { ...item, complete: !item.complete }
          : item
      );
    },
  },
});

export const todoAction = todoSlice.actions;
console.log(todoAction);
