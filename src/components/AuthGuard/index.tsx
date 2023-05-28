import { useEffect, ReactNode } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from 'helpers';
import styles from './AuthGuard.module.scss';
import PuffLoader from 'react-spinners/PuffLoader';

interface AuthGuardProps {
  children: ReactNode;
  redirectTo: string;
  authRequired?: boolean;
  logOutRequired?: boolean;
}

export const AuthGuard = ({
  children,
  redirectTo,
  authRequired,
  logOutRequired,
}: AuthGuardProps) => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if ((authRequired && !user) || (logOutRequired && user)) {
      navigate(redirectTo);
    }
  }, [user, loading, navigate, authRequired, logOutRequired, redirectTo]);

  if (loading) return <PuffLoader className={styles.loader} color="#e535ab" />;

  if ((authRequired && !user) || (logOutRequired && user)) return null;

  return <>{children}</>;
};
