import "../index.css";
import { TodoProp } from "../models/Todo";

export const ShowTodo = (props: TodoProp) => {
  return (
    <>
      <li className="text-left">
        <input
          className="accent-[#ea7ba2] mr-3"
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
