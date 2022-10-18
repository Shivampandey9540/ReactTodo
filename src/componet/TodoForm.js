import { useState, useContext } from "react";
// import {
//   //   FormGroup,
//   Input,
//   Button,
//   Form,
//   InputGroup,

//   //   InputGroupAddon,
// } from "reactstrap";
import { v4 } from "uuid";
import TodoContext from "../Context/TodoContext";
import { ADD_TODOS } from "../Context/action.types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./TodoForm.css";
const TodoForm = () => {
  const [todoString, settodoString] = useState("");

  const { dispatch } = useContext(TodoContext);

  const handleSumbit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return toast("Something is Wrong You didn't add any task");
    }
    const todo = {
      todoString,
      id: v4(),
    };
    dispatch({
      type: ADD_TODOS,
      payload: todo,
    });
    Notify();
    settodoString("");
    // Notify();
  };

  const Notify = () => {
    toast(` ${todoString} is added in task list`);
  };

  return (
    <div className="Form-hold">
      <form onSubmit={handleSumbit}>
        <input
          className="Input"
          type="text"
          id="todo"
          placeholder="Your next Task"
          value={todoString}
          onChange={(e) => {
            settodoString(e.target.value);
          }}
        />
        <button id="Button">Add</button>
      </form>
      <ToastContainer />
    </div>
  );
};
export default TodoForm;
