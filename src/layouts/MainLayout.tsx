import { Outlet } from 'react-router-dom';
import { Header, Footer } from 'components';

const MainLayout = () => {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
