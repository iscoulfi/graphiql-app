import { Outlet } from 'react-router-dom';
import { Header, Footer } from 'components';

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
