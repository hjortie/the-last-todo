import { TodoProp } from "../models/Todo";

export const ShowTodo = (props: TodoProp) => {
  return (
    <>
      <li>
        <input type="checkbox" checked={props.todo.done} />
        <span>{props.todo.name}</span>
      </li>
    </>
  );
};
