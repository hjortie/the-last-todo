import "../styles/AddTodo.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { defaultValue, Todo } from "../models/Todo";

type AddTodoProp = {
  addTodo: (t: Todo) => void;
};

export const AddTodo = (props: AddTodoProp) => {
  const [todo, setTodo] = useState<Todo>(defaultValue);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.addTodo(todo);
    setTodo(defaultValue);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, [e.target.id]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Vad mer ska göras?</label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          value={todo.name}
        />
        <button>Spara todo</button>
      </form>
    </>
  );
};
