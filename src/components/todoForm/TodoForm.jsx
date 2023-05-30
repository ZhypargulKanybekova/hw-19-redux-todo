import { Button, TextField, styled } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAction } from "../../store/todo/todoSlice";
import { TodoList } from "../todoList/TodoList";

export const TodoForm = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    const data = {
      id: Date.now(),
      title: input,
      complete: false,
    };

    dispatch(todoAction.addTodo(data));
    setInput("");
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };
  console.log(input);
  return (
    <Container onSubmit={addTodo}>
      <div >
        <TextField type="text" size="small" value={input} onChange={onChange} />
        <StyledButton type="submit" variant="contained" size="large">
          Add
        </StyledButton>
      </div>

      <div>
        <TodoList />
      </div>
    </Container>
  );
};

const StyledButton = styled(Button)(() => ({
  backgroundColor: "red",
}));

const Container = styled("form")(()=>({
    display:"flex",
    flexDirection:"column",
    alignItems:"center", 
  }))
 
