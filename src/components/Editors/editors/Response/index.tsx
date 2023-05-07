import styles from './Response.module.scss';

interface ResponseEditorProps {
  value: string;
}

export const Response = ({ value }: ResponseEditorProps) => {
  return (
    <div className={styles.responseEditor}>
      <textarea value={value} readOnly={true}></textarea>
    </div>
  );
};
