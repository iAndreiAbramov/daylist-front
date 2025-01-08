import React from 'react';

import { TestComponent } from 'lib/components/ui/TestComponent';
import { cn } from 'lib/utils/cn.ts';

import { LocalComponent } from './LocalComponent.tsx';

export const PageHome: React.FC = () => {
  return (
    <div className={cn('flex gap-4')}>
      <div>Page Home</div>
      <TestComponent />
      <LocalComponent />
    </div>
  );
};
