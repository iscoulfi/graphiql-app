import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import { Auth, Main, NotFound, Welcome } from 'pages';
import { ROUTES } from 'assets';

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.WELCOME} element={<MainLayout />}>
        <Route index element={<Welcome />} />
        <Route path={ROUTES.AUTH} element={<Auth />} />
        <Route path={ROUTES.MAIN} element={<Main />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
