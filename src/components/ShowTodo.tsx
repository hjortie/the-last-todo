import "../styles/ShowTodo.css";
import { TodoProp } from "../models/Todo";

export const ShowTodo = (props: TodoProp) => {
  return (
    <>
      <li>
        <input
          className="done-checkbox"
          type="checkbox"
          checked={props.todo.done}
          onChange={(e) => {
            props.toggle(e, props.todo.id!);
          }}
        />
        <span>{props.todo.name}</span>
      </li>
    </>
  );
};
