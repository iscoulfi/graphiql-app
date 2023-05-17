import CodeEditor from '@uiw/react-textarea-code-editor';
import { variablesPlaceholder } from 'config';
import styles from './VariablesEditor.module.scss';

interface VariablesEditorProps {
  value: string;
  onVariablesChange: (value: string) => void;
}

export const VariablesEditor = ({ value, onVariablesChange }: VariablesEditorProps) => {
  return (
    <div className={styles.variablesEditor}>
      <CodeEditor
        className={styles.variablesCode}
        value={value}
        language="json"
        placeholder={variablesPlaceholder}
        onChange={(e) => onVariablesChange(e.target.value)}
      />
    </div>
  );
};
