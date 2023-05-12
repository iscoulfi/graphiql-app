import { auth } from 'config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Button, Stack, Card, Container } from 'react-bootstrap';
import PuffLoader from 'react-spinners/PuffLoader';
import styles from './Welcome.module.scss';

export const Welcome = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const onMainClick = () => navigate('/main');
  const onSignInClick = () => navigate('/auth');
  const onSignUpClick = () => navigate('/auth?signup=true');

  if (loading) return <PuffLoader className={styles.loader} color="#e535ab" />;

  return (
    <div className={styles.welcome}>
      <Container className="col-md-6 col-sm-10 col-lg-6 m-0">
        <h1 className={styles.title}>Welcome to GraphiQL App!</h1>
        <Card.Text className="text-left">
          GraphiQL is an open-source tool that provides a playground/IDE for making GraphQL
          requests. It allows developers to easily explore and test GraphQL APIs, and is widely used
          in the GraphQL community.
        </Card.Text>
        <Card.Text className="text-left">
          Created for the Rolling Scopes School React 2023 course.
        </Card.Text>
      </Container>
      <Card className="col-md-4 col-sm-10 col-lg-4 text-justify h-100">
        <Card.Body className="text-center mx-auto">
          <div className={styles.object}>
            <object type="image/svg+xml" data="/img/logo.svg" />
          </div>
        </Card.Body>
        <hr className="col-md-8 mx-auto" />
        <Card.Subtitle className="text-center">
          {user ? 'You are signed in.' : 'Please sign in to continue.'}
        </Card.Subtitle>
        <Card.Body className="text-center">
          {user ? (
            <Button onClick={onMainClick} variant="secondary">
              Go to Main Page
            </Button>
          ) : (
            <Stack gap={2} className="col-md-8 mx-auto">
              <Button onClick={onSignInClick} variant="outline-secondary">
                Sign In
              </Button>
              <Button onClick={onSignUpClick} variant="secondary">
                Sign Up
              </Button>
            </Stack>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};
