import styles from './Footer.module.scss';
import { useTranslation } from 'react-i18next';
import 'bootstrap/scss/bootstrap.scss';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.contant}>
        <a href="https://rs.school/react" target="_blank" rel="noreferrer">
          <img src="img/rs_school.svg" className={styles.logo} alt="RS" />
        </a>
        <div className={styles.accounts}>
          <a href="https://github.com/iscoulfi" target="_blank" rel="noreferrer">
            <span className="d-none d-md-inline">{t('Konstantin Ulanov')}</span>
            <img src="/img/Konstantin.webp" alt="GitHub" className="d-md-none" />
          </a>
          <span className={styles.dash}>-</span>
          <a href="https://github.com/artemmyzrov" target="_blank" rel="noreferrer">
            <span className="d-none d-md-inline">{t('Artem Myzrov')} </span>
            <img src="/img/Artem.webp" alt="GitHub" className="d-md-none" />
          </a>
          <span className={styles.dash}>-</span>
          <a href="https://github.com/oooo0000ooo0000ooo" target="_blank" rel="noreferrer">
            <span className="d-none d-md-inline">{t('Kseniia Neustroeva')}</span>
            <img src="/img/Xenia.webp" alt="GitHub" className=" d-md-none" />
          </a>
        </div>

        <div className="p-3">© 2023</div>
      </div>
    </footer>
  );
};
