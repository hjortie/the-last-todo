import { ChangeEvent } from "react";

export class Todo {
  constructor(public name: string, public done: boolean, public id?: number) {
    if (!id) {
      this.id = Date.now();
    }
  }
}
export type TodoProp = {
  todo: Todo;
  toggle: (e: ChangeEvent<HTMLInputElement>, id: number) => void;
};

export const defaultValue = new Todo("", false);
