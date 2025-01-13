import type { ITodoList } from 'lib/types/i-todo-list.ts';

export const TODOLIST_MOCK: ITodoList = {
  id: '1',
  name: 'My Todo List',
  todos: [
    {
      id: '1',
      name: 'Do the laundry',
    },
    {
      id: '2',
      name: 'Clean the kitchen',
    },
    {
      id: '3',
      name: 'Walk the dog',
    },
  ],
};
