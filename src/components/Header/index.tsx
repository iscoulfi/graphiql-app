import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import { HeaderAuthentication, LanguageSelector } from './components';
import { Paths } from 'assets';
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
        <Navbar.Brand className="link" onClick={() => navigate(Paths.WELCOME)}>
          <img
            src="/img/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="GraphQL logo"
          />
        </Navbar.Brand>
        <Container className="d-flex justify-content-end p-0">
          <HeaderAuthentication isSticky={isSticky} />
          <LanguageSelector isSticky={isSticky} />
        </Container>
      </Container>
    </Navbar>
  );
};
