import React from "react";
import { calculatorAction } from "../../store/calculator/calcularorSlice";
import { useDispatch, useSelector } from "react-redux";


export const Counter = () => {
  const result = useSelector((state) => state.calculate.result);
  const dispatch = useDispatch();
  console.log(result);
  const addHandler = () => {
    dispatch(calculatorAction.addNumber(5));
  };
  const minusNumber = () => {
    dispatch(calculatorAction.minus(5));
  };
  const multiplayNumber = () => {
    dispatch(calculatorAction.multiPlay(2));
  };
  const substractNumber = () => {
    dispatch(calculatorAction.subStract(2));
  };
  return (
    <div>
      <h1>Calculator</h1>
      <span>{result}</span>
      <button onClick={addHandler}>+</button>
      <button onClick={minusNumber}>-</button>
      <button onClick={multiplayNumber}>*</button>
      <button onClick={substractNumber}>/</button>
    </div>
  );
};
