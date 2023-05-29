import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
  todos: [],
};
export const todoSlice = createSlice({
  name:"todos",
  initialState,
  reducers:{
    addTodo:(state,action)=>{
      return{
        ...state,
        todos: [
          ...state.todos,
          { title: action.payload, completed: false, id: v4() },
        ],
      }
    },
    deleteTodo: (state,action)=>{
        return{
          ...state,
          todos: state.todos.filter((item) => item.id !== action.payload),
        }
    },
    editTodo:(state,action)=>{
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.id) {
            return { ...item, title: action.value };
          }
          return item;
        }),
      };
    },
    deleteAll:(state,action)=>{
      return initialState;
    },
    complateTodo:(state,action)=>{
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload) {
            return { ...item, completed: !item.completed };
          }
          return item;
        }),
      };
    }
  }
})

export const todoAction = todoSlice.actions;
console.log(todoAction);

