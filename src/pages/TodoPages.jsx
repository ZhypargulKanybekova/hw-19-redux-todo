import React from "react";
import TodoForm from "../components/todoForm/TodoForm";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";

export const TodoPages = () => {
  return (
    <>
      <Header />
     <Outlet/>
    </>
  );
};
