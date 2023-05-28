import { auth } from 'helpers';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button, Stack, Card, Container } from 'react-bootstrap';
import { Paths } from 'assets';
import PuffLoader from 'react-spinners/PuffLoader';
import styles from './Welcome.module.scss';

export const Welcome = () => {
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  const handleMainClick = () => navigate(Paths.MAIN);
  const handleSignInClick = () => navigate(Paths.AUTH);
  const handleSignUpClick = () => navigate(Paths.SIGNUP);

  const { t } = useTranslation();

  if (loading) return <PuffLoader className={styles.loader} color="#e535ab" />;

  return (
    <div className={styles.welcome}>
      <Container className="col-md-6 col-sm-10 col-lg-6 m-0">
        <h1 className={styles.title}>{t('Welcome title')}</h1>
        <Card.Text className="text-left">{t('Welcome text')}</Card.Text>
        <Card.Text className="text-left">
          <a href="https://rickandmortyapi.com/graphql" target="_blank" rel="noreferrer">
            {`Rick and Morty API `}
          </a>
          {t('Сhosen as a sample handler for GraphQL queries')}
        </Card.Text>
        <Card.Text className="text-left">{t('Created')}</Card.Text>
      </Container>
      <Card className="col-md-4 col-sm-6 col-lg-4 text-justify h-100">
        <Card.Body className="text-center mx-auto">
          <div className={styles.object}>
            <object type="image/svg+xml" data="/img/logo.svg" />
          </div>
        </Card.Body>
        <hr className="col-md-8 mx-auto" />
        <Card.Subtitle className="text-center">
          {user ? t('You are signed in') : t('Please sign in to continue')}
        </Card.Subtitle>
        <Card.Body className="text-center">
          {user ? (
            <Button onClick={handleMainClick} variant="secondary">
              {t('Go to main page')}
            </Button>
          ) : (
            <Stack gap={2} className="mx-auto col-lg-9">
              <Button onClick={handleSignInClick} variant="outline-secondary">
                {t('Sign in')}
              </Button>
              <Button onClick={handleSignUpClick} variant="secondary">
                {t('Sign up')}
              </Button>
            </Stack>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};
