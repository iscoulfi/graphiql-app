import styles from './Footer.module.scss';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <a href="https://rs.school/react" target="_blank" rel="noreferrer">
        <img src="img/rs_school.svg" className={styles.logo} alt="RS" />
      </a>

      <div className={styles.accounts}>
        <a href="https://github.com/iscoulfi" target="_blank" rel="noreferrer">
          <span>{t('Konstantin Ulanov')}</span>
        </a>
        <span>-</span>
        <a href="https://github.com/artemmyzrov" target="_blank" rel="noreferrer">
          <span>{t('Artem Myzrov')}</span>
        </a>
        <span>-</span>
        <a href="https://github.com/oooo0000ooo0000ooo" target="_blank" rel="noreferrer">
          <span>{t('Kseniia Neustroeva')}</span>
        </a>
      </div>

      <div className="p-3">© 2023</div>
    </footer>
  );
};
