import { logout } from 'config';
import { TbLogout } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string | undefined) => {
    i18n.changeLanguage(language);
  };

  return (
    <Navbar sticky="top" bg="light">
      <div className={styles.checkLanguage}>
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('ru')}>RU</button>
      </div>
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
