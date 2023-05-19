import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';
import { Container, Navbar, ButtonGroup, Button } from 'react-bootstrap';
import { HeaderAuthentication } from './components';

export const Header = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string | undefined) => {
    i18n.changeLanguage(language);
  };

  const isActive = (language: 'en' | 'ru') => i18n.language === language;

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScroll = window.scrollY > 0;
      setIsSticky(isScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate = useNavigate();

  return (
    <Navbar
      className={`border-bottom ${styles.header} ${isSticky ? 'bg-dark text-white' : ''}`}
      sticky="top"
    >
      <Container>
        <Navbar.Brand className={styles.link} onClick={() => navigate('/')}>
          <img
            src="/img/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="GraphQL logo"
          />
        </Navbar.Brand>
        <Container className="d-flex justify-content-end p-0">
          <HeaderAuthentication className={isSticky ? 'text-white' : ''} />
          <ButtonGroup size="sm" className="ms-2">
            <Button
              active={isActive('en')}
              variant="outline-secondary"
              onClick={() => changeLanguage('en')}
              className={isSticky ? 'text-white' : ''}
            >
              EN
            </Button>
            <Button
              active={isActive('ru')}
              variant="outline-secondary"
              onClick={() => changeLanguage('ru')}
              className={isSticky ? 'text-white' : ''}
            >
              RU
            </Button>
          </ButtonGroup>
        </Container>
      </Container>
    </Navbar>
  );
};
