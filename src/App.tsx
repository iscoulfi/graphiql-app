import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import { Login, Register, Main, NotFound, Welcome } from 'pages';
import { Paths } from 'assets';

const App = () => {
  return (
    <Routes>
      <Route path={Paths.WELCOME} element={<MainLayout />}>
        <Route index element={<Welcome />} />
        <Route path={Paths.AUTH} element={<Login />} />
        <Route path={Paths.SIGNUP} element={<Register />} />
        <Route path={Paths.MAIN} element={<Main />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
