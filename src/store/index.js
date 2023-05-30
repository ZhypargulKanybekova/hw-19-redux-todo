import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./todo/todoSlice";
import { authSlice } from "./auth/authSlice";
import { calculatorSlice } from "./calculator/calcularorSlice";

export const store = configureStore({
  reducer: {
    [todoSlice.name]: todoSlice.reducer,
    [authSlice.name]: authSlice.reducer,
    [calculatorSlice.name]: calculatorSlice.reducer,
  },
});
