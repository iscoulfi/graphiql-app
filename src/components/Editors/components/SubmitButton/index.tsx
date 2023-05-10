import Button from 'react-bootstrap/Button';
import styles from './SubmitButton.module.scss';

export const SubmitButton = ({ loading }: { loading: boolean }) => {
  return (
    <div className={styles.submitButton}>
      <Button variant="primary" disabled={loading} type="submit" size="sm">
        {loading ? (
          <svg width="12.8" height="12.8" viewBox="0 6 32 32" fill="white">
            <rect x="6" y="6" rx="2" ry="2" width="20" height="20" />
          </svg>
        ) : (
          <svg width="12.8" height="12.8" viewBox="0 6 32 32" fill="white">
            <path d="M5.92 24.096q0 1.088 0.928 1.728 0.512 0.288 1.088 0.288 0.448 0 0.896-0.224l16.16-8.064q0.48-0.256 0.8-0.736t0.288-1.088-0.288-1.056-0.8-0.736l-16.16-8.064q-0.448-0.224-0.896-0.224-0.544 0-1.088 0.288-0.928 0.608-0.928 1.728v16.16z"></path>
          </svg>
        )}
      </Button>
    </div>
  );
};
