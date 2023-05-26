import styles from './NotFound.module.scss';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ROUTES } from 'assets';

export const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <h2>{t('Page not found')}</h2>
      <Button variant="primary" className="mt-3" onClick={() => navigate(ROUTES.WELCOME)}>
        {t('Home')}
      </Button>
    </div>
  );
};
