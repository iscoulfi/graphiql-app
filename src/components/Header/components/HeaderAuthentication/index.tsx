import { logout, auth } from 'config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TbLogout } from 'react-icons/tb';
import { Button } from 'react-bootstrap';
import styles from './HeaderAuthentication.module.scss';

export const HeaderAuthentication = ({ className }: { className: string }) => {
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  const { t } = useTranslation();

  const { pathname } = useLocation();
  const isAuthPage = pathname === '/auth';

  if (user) return <TbLogout className={styles.logout} onClick={logout} title="Log out" />;

  if (!isAuthPage && !loading)
    return (
      <div>
        <Button
          className={`border-0 ${className}`}
          size="sm"
          variant=""
          onClick={() => navigate('/auth')}
        >
          {t('Header sign in')}
        </Button>
        <Button size="sm" className={className} onClick={() => navigate('/auth?signup=true')}>
          {t('Header sign up')}
        </Button>
      </div>
    );

  return null;
};
