import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from 'config';
import styles from './Main.module.scss';
import PuffLoader from 'react-spinners/PuffLoader';

export const Main = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) navigate('/');
  }, [user, loading, navigate]);

  if (loading) return <PuffLoader className={styles.loader} color="#e535ab" />;

  return <div>Main page here</div>;
};
