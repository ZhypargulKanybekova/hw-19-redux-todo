import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TodoList } from "../todoList/TodoList";
import { todoAction } from "../../store/todo/todoSlice";
import { authAction } from "../../store/auth/authSlice";

export const TodoForm = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { todos } = useSelector((state) => state);

  const changeInputHandler = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(todoAction.addTodo());
    setValue("");
  };

  const removeAllTodo = (id) => {
    dispatch(todoAction.deleteAll({id:id}));
  };

  const logoutHandler = () => {
    dispatch(authAction.logout());
    dispatch(todoAction.deleteAll());
    navigate("/login");
  };



  return (
    <>
      <Container>
        <SecondContainer>
          <Input type="text" value={value} onChange={changeInputHandler} />
          <Button onClick={submitHandler} disabled={!value}>
            Add
          </Button>
          <Button onClick={removeAllTodo}>delete all</Button>
        </SecondContainer>
        <div>
          {todos.map((item) => (
            <TodoList key={item.id} todo={item} />
          ))}
        </div>
      </Container>
    </>
  );
};



const Container = styled.div`
  display: flex;
  width: 800px;
  align-self: center;
  flex-direction: column;
  margin-top: 50px;
`;

const Button = styled.button`
  width: 120px;
  height: 38px;
  border-radius: 5px;
  background-color: #4242a2c1;
  color: white;
  border-color: #4242a2c1;
`;

const SecondContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid;
  background-color: #a92e77;
`;

const Input = styled.input`
  width: 400px;
  height: 30px;
  border-radius: 5px;
  margin-left: 20px;
`;
