import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import DeleteIcon from "@mui/icons-material/Delete";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";
import { todoAction } from "../../store/todo/todoSlice";

export const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);
  console.log("todos", todos);
  console.log("hello");

  const [todoId, setTodoId] = useState(null);
  const [todoTitle, setTodoTitle] = useState("");

  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(todoAction.deleteTodo(id));
  };

  const complateHandler = (id) => {
    dispatch(todoAction.complateTodo(id));
  };

  const editTodoHandler = ({ id, title }) => {
    setTodoId(id);
    setTodoTitle(title);
  };

  const saveHandler = (id) => {
    dispatch(todoAction.editTodo({ id, todoTitle }));
    setTodoId("");
  };

  return (
    <div>
      {todos?.map((item) => (
        <div key={item.id}>
          {item.id === todoId ? (
            <>
              <TextField
                type="text"
                value={todoTitle}
                onChange={(e) => setTodoTitle(e.target.value)}
              />
              <button onClick={() => saveHandler(item.id)}>Save</button>
              <button onClick={() => setTodoId(null)}>Cencel</button>
            </>
          ) : (
            <StiledContainer key={item.id}>
              <p
                style={{
                  textDecoration: item.complete ? "line-through" : "none",
                }}
              >
                {item.title}
              </p>
              <button onClick={() => deleteHandler(item.id)}>
              <DeleteIcon/>
              </button>

              <button onClick={() => complateHandler(item.id)}>complete</button>
              <button
                onClick={() =>
                  editTodoHandler({ id: item.id, title: item.title })
                }
              >
               
                <BorderColorIcon />
              </button>
            </StiledContainer>
          )}
        </div>
      ))}
    </div>
  );
};

const StiledContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  gap: "20px",
}));
