import React from 'react';

import { clsx } from 'clsx';

import { DefaultLayout } from 'lib/components/layouts';
import { Footer } from 'lib/components/ui/Footer';
import { Header } from 'lib/components/ui/Header';
import { TodoList } from 'lib/components/ui/TodoList';

import { TODOLIST_MOCK } from './mocks/todolist-mock.ts';

export const PageHome: React.FC = () => {
  return (
    <DefaultLayout>
      <Header />
      <main className={clsx('flex flex-col gap-4 justify-start', 'h-full')}>
        <TodoList todolist={TODOLIST_MOCK} />
      </main>
      <Footer />
    </DefaultLayout>
  );
};
