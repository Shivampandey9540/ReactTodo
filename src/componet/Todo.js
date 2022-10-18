import { useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble, FaCheck } from "react-icons/fa";
import TodoContext from "../Context/TodoContext";

import { REMOVE_TODO, ADD_TODONE } from "../Context/action.types";

const Todo = () => {
  const { todo, dispatch } = useContext(TodoContext);

  return (
    <ListGroup className="mt-5 mb-2 items">
      {todo.map((todo) => (
        <ListGroupItem key={todo.id} className={`${todo.id}`}>
          {todo.todoString}
          <div className="float-right">
            <span>
              <FaCheck
                id={`${todo.id}`}
                onClick={(e) => {
                  console.log(e.target.id);
                  const change = document.getElementsByClassName(
                    `${e.target.id}`
                  )[0];
                  change.style.backgroundColor = "#E8BD0D";
                  change.style.textDecoration = "line-through";
                }}
              />
            </span>
            <span
              onClick={() => {
                dispatch({ type: REMOVE_TODO, payload: todo.id });
              }}
            >
              <FaCheckDouble />
            </span>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Todo;
