import "../index.css";
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label className="text-2xl font-extrabold" htmlFor="name">
          Vad mer ska göras?
        </label>
        <input
          className="bg-white p-1.5 rounded-md ring-1 ring-[rgb(170,90,118)]"
          type="text"
          id="name"
          onChange={handleChange}
          value={todo.name}
        />
        <button className="self-end rounded-md bg-[#f9f9f9] ring-4 ring-transparent p-2 hover:ring-[#ea7ba2]">
          Spara todo
        </button>
      </form>
    </>
  );
};
