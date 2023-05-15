import { logout } from 'config';
import { TbLogout } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';
import { Container, Navbar, ButtonGroup, Button } from 'react-bootstrap';

export const Header = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string | undefined) => {
    i18n.changeLanguage(language);
  };

  const isActive = (language: 'en' | 'ru') => i18n.language === language;

  return (
    <Navbar sticky="top" bg="light">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/img/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="GraphQL logo"
          />
        </Navbar.Brand>
        <ButtonGroup size="sm" className="ms-auto me-3">
          <Button
            active={isActive('en')}
            variant="outline-secondary"
            onClick={() => changeLanguage('en')}
          >
            EN
          </Button>
          <Button
            active={isActive('ru')}
            variant="outline-secondary"
            onClick={() => changeLanguage('ru')}
          >
            RU
          </Button>
        </ButtonGroup>
        <TbLogout className={styles.logout} onClick={logout} />
      </Container>
    </Navbar>
  );
};
