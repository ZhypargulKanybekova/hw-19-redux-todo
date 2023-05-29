import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    result: 0,
    }

    export const calculatorSlice = createSlice({
        name: "calculate",
        initialState,
        reducers: {
          addNumber: (state, action) => {
            state.result = state.result + action.payload;
          },
          minus:(state,action)=>{
              state.result = state.result - action.payload;
          },
          multiPlay:(state,action)=>{
              state.result = state.result * action.payload;
          },
          subStract:(state,action)=>{
              state.result = state.result / action.payload;
          },
        },
      });
      
      export const calculatorAction = calculatorSlice.actions;
      console.log(calculatorAction);