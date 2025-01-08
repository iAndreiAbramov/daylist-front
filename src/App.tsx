import { Route, Routes } from 'react-router';

import { PageHome } from './pages/Home';
import { TestComponent } from './lib/components/ui/TestComponent';

import './styles/global.css';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/adsf" element={<TestComponent />} />
    </Routes>
  );
};
