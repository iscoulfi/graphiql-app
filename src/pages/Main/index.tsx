import styles from './Main.module.scss';
import { Documentation, Editors, AuthGuard } from 'components';
import { Paths } from 'assets';

export const Main = () => {
  return (
    <AuthGuard authRequired redirectTo={Paths.WELCOME}>
      <div className={styles.main}>
        <Documentation />
        <Editors />
      </div>
    </AuthGuard>
  );
};
