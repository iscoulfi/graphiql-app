import styles from './VariablesEditor.module.scss';

interface VariablesEditorProps {
  value: string;
  onVariablesChange: (value: string) => void;
}

export const VariablesEditor = ({ value, onVariablesChange }: VariablesEditorProps) => {
  return (
    <div className={styles.variablesEditor}>
      <textarea
        className={styles.textarea}
        value={value}
        onChange={(e) => onVariablesChange(e.target.value)}
      ></textarea>
    </div>
  );
};
