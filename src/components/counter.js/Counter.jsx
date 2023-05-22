import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { calculateType } from '../../store/calculator/calculator';

export const Counter = () => {

    const result = useSelector((state) => state.calculator.result);
    const dispatch = useDispatch()

    const addHandler = () => {
        dispatch({ type: calculateType.PLUS, payload: 5 });
      };
    const minusHandler = () => {
        dispatch({ type: calculateType.MINUS, payload: 5 });
      };
    const multiplicHandler = () => {
        dispatch({ type: calculateType.MULTIPLIC, payload: 2 });
      };
    const divisionHandler = () => {
        dispatch({ type: calculateType.DIVISION, payload: 4 });
      };
    const resetHandler =()=>{
        dispatch({type:calculateType.RESET,payload:0})
    }  

  return (
    <div>
        <main >
      <h1>Redux Calculator</h1>
      <div>Result: {result}</div>
      <button  onClick={addHandler}>+ 5</button>
      <button onClick={minusHandler}>- 5</button>
      <button  onClick={multiplicHandler}>* 2</button>
      <button onClick={divisionHandler}>/ 4</button>
      <button onClick={resetHandler}>reset</button>
    </main>
    </div>
  )
}
