import styles from './Main.module.scss';
import { Documentation, Editors, AuthCheck } from 'components';
import { Paths } from 'assets';

export const Main = () => {
  return (
    <AuthCheck authRequired redirectTo={Paths.WELCOME}>
      <div className={styles.main}>
        <Documentation />
        <Editors />
      </div>
    </AuthCheck>
  );
};
