import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import { HeaderAuthentication, LanguageSelector } from './components';
import classNames from 'classnames';

export const Header = () => {
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
      className={classNames('border-bottom header', { 'bg-dark text-white': isSticky })}
      sticky="top"
    >
      <Container>
        <Navbar.Brand className="link" onClick={() => navigate('/')}>
          <img
            src="/img/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="GraphQL logo"
          />
        </Navbar.Brand>
        <Container className="d-flex justify-content-end p-0">
          <HeaderAuthentication className={classNames({ 'text-white': isSticky })} />
          <LanguageSelector className={classNames({ 'text-white': isSticky })} />
        </Container>
      </Container>
    </Navbar>
  );
};
