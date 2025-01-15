import React, { PropsWithChildren } from 'react';

import { clsx } from 'clsx';

export const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={clsx('flex flex-col justify-between', 'min-h-screen px-5')}>
      {children}
    </div>
  );
};
