import React from 'react';

import { clsx } from 'clsx';

import type { ITodoList } from 'lib/types/i-todo-list.ts';

interface Props {
  todolist: ITodoList;
}

export const TodoList: React.FC<Props> = ({ todolist }) => {
  const { name, todos } = todolist;
  return (
    <>
      <h2>{name}</h2>
      <ul className={clsx('flex flex-col gap-y-3 justify-start')}>
        {todos.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
};
