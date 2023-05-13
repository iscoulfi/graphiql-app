import { Editor, OnChange } from '@monaco-editor/react';
import { editorOptions } from 'config';
import styles from './OperationEditor.module.scss';

interface OperationEditorProps {
  value: string;
  onOperationChange: (value: string) => void;
}

export const OperationEditor = ({ value, onOperationChange }: OperationEditorProps) => {
  const onChange: OnChange = (value) => onOperationChange(value ?? '');

  return (
    <div className={styles.operationEditor}>
      <Editor
        loading=""
        language="graphql"
        value={value}
        options={editorOptions}
        onChange={onChange}
      />
    </div>
  );
};
