import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActionTypes } from "../../store/auth/authReducer";
import { styled } from "styled-components";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthozired = useSelector((state) => state.auth.isAuthozired);
  console.log(isAuthozired);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (id) => {
    return (e) => {
      setForm((prev) => ({ ...prev, [id]: e.target.value }));
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (form.email.includes("@") && form.password.length > 6) {
      dispatch({
        type: authActionTypes.LOGIN,
        email: form.email,
        password: form.password,
      });
      navigate("/todos");
    }
  };
  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          onChange={inputChangeHandler("email")}
          value={form.email}
        />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="passsword"
          onChange={inputChangeHandler("password")}
          value={form.password}
        />
        <Button>Login</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-self: center;
  width: 500px;
  height: 300px;
  background-color: #439aae;
  border-radius: 5px;
  box-shadow: 0px 1px 19px 0px rgba(34, 60, 80, 0.2);
  margin-top: 200px;
  padding: 20px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  row-gap: 20px;
  margin-left: 100px;
`;

const Input = styled.input`
  width: 300px;
  height: 28px;
  border-radius: 5px;
  border-color: white;
`;
const Button = styled.button`
  width: 120px;
  height: 38px;
  margin-left: 100px;
  border-radius: 5px;
  background-color: #4242a2c1;
  color: white;
  border-color: #4242a2c1;
`;

const Label = styled.label`
  color: white;
  text-align: start;
  margin-right: 20px;
  font-size: 24px;
`;
