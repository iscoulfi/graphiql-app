import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import { Auth, Main, NotFound, Welcome } from 'pages';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Welcome />} />
          <Route path="auth" element={<Auth />} />
          <Route path="main" element={<Main />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
