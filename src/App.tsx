import { Route, Routes } from 'react-router';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Welcome to the App!</h1>} />
    </Routes>
  );
}

export default App;