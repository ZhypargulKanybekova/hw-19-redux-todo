import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { todoActionTypes } from "../../store/todo/todoReducer";

export const TodoList = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState("");

  const dispatch = useDispatch();

  const changeEditValue = (e) => {
    setEditValue(e.target.value);
  };

  const deleteHandler = () => {
    dispatch({ type: todoActionTypes.DELETE_TODO, payload: todo.id });
  };

  const toggleTodoHandler = () => {
    dispatch({ type: todoActionTypes.COMPLETE_TODO, payload: todo.id });
  };

  const editTodoHandler = () => {
    dispatch({
      type: todoActionTypes.EDIT_TODO,
      id: todo.id,
      value: editValue,
    });
    setIsEditing();
  };

  const editHandler = () => {
    setIsEditing(true);
    setEditValue(todo.title);
  };

  return (
    <StyledUl>
      <StyledLi>
        {isEditing ? (
          <>
            <Inputt type="text" value={editValue} onChange={changeEditValue} />
            <Button onClick={editTodoHandler}>save</Button>
          </>
        ) : (
          <>
            <Container>
              <Input type="checkbox" onClick={toggleTodoHandler} />
              <Title done={todo.completed}>{todo.title}</Title>
            </Container>
            <Buttons>
              <Button onClick={deleteHandler}>delete</Button>
              <Button onClick={editHandler}>edit</Button>
            </Buttons>
          </>
        )}
      </StyledLi>
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  border-radius: 10px;
  border: 1px solid black;
  margin-top: 30px;
  padding: 30px;
  height: fit-content;
`;
const Input = styled.input`
  height: 30px;
  width: 30px;
  border-radius: 5px;
`;
const StyledLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const Inputt = styled.input`
  height: 30px;
  width: 300px;
  border-radius: 5px;
`;
const Button = styled.button`
  width: 120px;
  height: 38px;
  border-radius: 5px;
  background-color: #4242a2c1;
  color: white;
  border-color: #4242a2c1;
`;

const Title = styled.p`
  text-decoration: ${(props) => (props.done ? "line-through" : "")};
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const StyledTitleContainer = styled.div``;
