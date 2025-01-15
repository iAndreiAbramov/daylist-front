import { ITodoItem } from './i-todo-item.ts';

export interface ITodoList {
  id: string;
  name: string;
  todos: ITodoItem[];
}
