import "../styles/TodoApp.css";
import { ChangeEvent, useState } from "react";
import { Todo } from "../models/Todo";
import { ShowTodo } from "./ShowTodo";
import { AddTodo } from "./AddTodo";

export const TodoApp = () => {
  const defaultTodos: Todo[] = [
    new Todo("Äta", false, 1),
    new Todo("Sova", false, 2),
    new Todo("Koda", false, 3),
    new Todo("Repetera", false, 4),
  ];

  const [todos, setTodos] = useState<Todo[]>(defaultTodos);

  const addTodo = (newTodo: Todo) => {
    setTodos([...todos, new Todo(newTodo.name, newTodo.done, newTodo.id)]);
  };

  const toggle = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    console.log("Toggling todo:", id, e.target.checked);
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, done: e.target.checked } : t))
    );
  };

  const compare = (a: Todo, b: Todo) => {
    const todoA = a.name.toLowerCase();
    const todoB = b.name.toLowerCase();

    let result = 0;

    if (todoA > todoB) {
      result = 1;
    }
    if (todoA < todoB) {
      result = -1;
    }
    return result;
  };

  return (
    <>
      <div className="todos-container">
        <div>
          <h2>Saker att göra:</h2>
          <ul>
            {todos
              .filter((t) => !t.done)
              .map((t) => {
                return (
                  <ShowTodo
                    todo={t}
                    key={t.id}
                    toggle={(e) => toggle(e, t.id!)}
                  />
                );
              })}
          </ul>
        </div>
        <div>
          <h2>Saker som är gjorda:</h2>
          <ul>
            {todos
              .filter((t) => t.done)
              .map((t) => {
                return (
                  <ShowTodo
                    todo={t}
                    key={t.id}
                    toggle={(e) => toggle(e, t.id!)}
                  />
                );
              })}
          </ul>
        </div>
        <div>
          <button
            onClick={() => {
              const sortedTodos = [...todos].sort(compare);
              setTodos(sortedTodos);
            }}
          >
            Sortera A-Ö
          </button>
        </div>
      </div>
      <AddTodo addTodo={addTodo} />
    </>
  );
};
