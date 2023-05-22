import { combineReducers, createStore } from "redux";
import authReducer from "./auth/authReducer";
import todoReducer from "./todo/todoReducer";
import calculatorReducer from "./calculator/calculator";





const rootReducer = combineReducers({ auth: authReducer, todo: todoReducer,calculator:calculatorReducer});

export const store = createStore(rootReducer);