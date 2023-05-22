import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import styles from './SubmitButton.module.scss';

import { BsPlayFill, BsStopFill } from 'react-icons/bs';

export const SubmitButton = ({ loading }: { loading: boolean }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.submitButton}>
      <Button variant="primary" disabled={loading} type="submit" size="sm">
        <span className="d-lg-none fs-6 pe-2">{t('Send')}</span>
        {loading ? <BsStopFill /> : <BsPlayFill />}
      </Button>
    </div>
  );
};
