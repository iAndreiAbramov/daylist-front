import { Route, Routes } from 'react-router';

import { PageHome } from './pages/Home';

import './styles/global.css';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
    </Routes>
  );
};
