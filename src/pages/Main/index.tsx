import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from 'config';
import styles from './Main.module.scss';
import { Editors } from 'components';
import { EditorsSkeleton } from 'components/Editors/components/Skeletons';

export const Main = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) navigate('/');
  }, [user, loading, navigate]);

  if (loading) return <EditorsSkeleton />;

  if (!user) return null;

  return <Editors />;
};
