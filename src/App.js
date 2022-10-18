import { useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoContext from "./Context/TodoContext";

import todoReduser from "./Context/reduser";

import React from "react";
import TodoForm from "./componet/TodoForm";
import Todo from "./componet/Todo";

const App = () => {
  const [todo, dispatch] = useReducer(todoReduser, []);
  return (
    <TodoContext.Provider value={{ todo, dispatch }}>
      <Container fluid>
        <h1> Todo App with context Api</h1>
        <TodoForm />
        <Todo />
        {/* <TodoForm /> */}
      </Container>
    </TodoContext.Provider>
  );
};

export default App;
