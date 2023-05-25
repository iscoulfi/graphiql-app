import styles from './NotFound.module.scss';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <h2>Page not found</h2>
      <Button variant="primary" className="mt-3" onClick={() => navigate('/')}>
        Home
      </Button>
    </div>
  );
};
