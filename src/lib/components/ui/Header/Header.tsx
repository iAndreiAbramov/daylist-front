import React from 'react';

import { clsx } from 'clsx';

export const Header: React.FC = () => {
  return (
    <header className={clsx('flex items-center gap-x-10', 'h-16')}>
      Header
    </header>
  );
};
