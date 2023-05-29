import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { todoAction } from "../../store/todo/todoSlice";
// import { todoActionTypes } from "../../store/todo/todoReducer";

export const TodoList = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState("");

  const todos  = useSelector((state) => state.todos);
  console.log(todos, "todods");

  const dispatch = useDispatch();


  const deleteHandler = (id) => {
    dispatch(todoAction.deleteTodo(id));
  };

  const toggleTodoHandler = (id) => {
    dispatch(todoAction.complateTodo(id));
  };

 const editTodoHandler = ({id,title})=>{
  setIsEditing(id);
  setEditValue(title)
 }

 const saveHandler=(id)=>{
  dispatch(todoAction.editTodo({id,editValue}))
 }

  return (
    <StyledUl>
    {todos?.map((item) => (
     
      <StyledLi>
        {item.id === isEditing ? (
          <>
          <Input 
          type="text"
          value={editValue}
          onChange={(e)=>setEditValue(e.target.value)}/>
          <button onClick={()=>saveHandler(item.id)} >Save</button>
          <button onClick={()=>setIsEditing(null)}>Cencel</button>
          </>
        ) : (
          <Buttons key={item.id}>
            <Title
              style={{
                textDecoration: item.complete ? "line-through" : "none",
              }}
            >
              {item.title}
            </Title>
            <Button onClick={() => deleteHandler(item.id)}>
             delete
            </Button>

            <Button onClick={() => toggleTodoHandler(item.id)}>complete</Button>
            <Button onClick={() => editTodoHandler({id:item.id, title:item.title})}>
              edit
            </Button>
          </Buttons>
        )}
      </StyledLi>
    ))}
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

