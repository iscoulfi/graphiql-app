import { OnChange, Editor } from '@monaco-editor/react';
import { editorOptions } from 'config';
import styles from './VariablesEditor.module.scss';

interface VariablesEditorProps {
  value: string;
  onVariablesChange: (value: string) => void;
}

export const VariablesEditor = ({ value, onVariablesChange }: VariablesEditorProps) => {
  const onChange: OnChange = (value) => onVariablesChange(value ?? '');

  return (
    <div className={styles.variablesEditor}>
      <Editor
        loading=""
        language="json"
        value={value}
        options={editorOptions}
        onChange={onChange}
      />
    </div>
  );
};
