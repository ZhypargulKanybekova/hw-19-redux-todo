import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthPages } from "./pages/AuthPages";
import { TodoPages } from "./pages/TodoPages";
import { Counter } from "./components/counter.js/Counter";
import { TodoForm } from "./components/todoForm/TodoForm";
import { TodoList } from "./components/todoList/TodoList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<AuthPages />} />
        <Route path="/todos" element={<TodoPages />}>
          <Route path="counter" element={<Counter />} />
          <Route path="todo" element={<TodoForm />} />
          {/* <Route path="todo" element={<TodoList />} /> */}
        </Route>

        <Route path="*" element={<Navigate to="login" />} />
      </Routes>
    </div>
  );
}

export default App;
