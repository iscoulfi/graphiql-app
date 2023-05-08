import { logout } from 'config';
import { TbLogout } from 'react-icons/tb';
import styles from './Header.module.scss';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
  return (
    <Navbar sticky="top" bg="light">
      <Container>
        <Navbar.Brand>
          <img
            src="/img/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="GraphQL logo"
          />
        </Navbar.Brand>
        <TbLogout className={styles.logout} onClick={logout} />
      </Container>
    </Navbar>
  );
};
