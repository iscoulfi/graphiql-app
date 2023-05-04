import styles from './Footer.module.scss';
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://rs.school/react" target="_blank" rel="noreferrer">
        <img src="img/rs_school.svg" className={styles.logo} alt="RS" />
      </a>

      <div className={styles.accounts}>
        <a href="https://github.com/iscoulfi" target="_blank" rel="noreferrer">
          <span>Konstantin Ulanov</span>
        </a>
        <span>-</span>
        <a href="https://github.com/artemmyzrov" target="_blank" rel="noreferrer">
          <span>Artem Myzrov</span>
        </a>
        <span>-</span>
        <a href="https://github.com/oooo0000ooo0000ooo" target="_blank" rel="noreferrer">
          <span>Kseniia Neustroeva</span>
        </a>
      </div>

      <div className="p-3">© 2023</div>
    </footer>
  );
};
