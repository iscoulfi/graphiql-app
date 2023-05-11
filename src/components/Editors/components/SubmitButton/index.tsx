import Button from 'react-bootstrap/Button';
import styles from './SubmitButton.module.scss';

import { BsPlayFill, BsStopFill } from 'react-icons/bs';

export const SubmitButton = ({ loading }: { loading: boolean }) => {
  return (
    <div className={styles.submitButton}>
      <Button variant="primary" disabled={loading} type="submit" size="sm">
        {loading ? <BsStopFill /> : <BsPlayFill />}
      </Button>
    </div>
  );
};
