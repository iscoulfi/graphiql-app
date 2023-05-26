import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from 'helpers';
import styles from './Main.module.scss';
import PuffLoader from 'react-spinners/PuffLoader';
import { Documentation, Editors } from 'components';
import { Paths } from 'assets';

export const Main = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) navigate(Paths.WELCOME);
  }, [user, loading, navigate]);

  if (loading) return <PuffLoader className={styles.loader} color="#e535ab" />;

  if (!user) return null;

  return (
    <div className={styles.main}>
      <Documentation />
      <Editors />
    </div>
  );
};
