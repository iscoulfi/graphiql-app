import { Editor, OnChange } from '@monaco-editor/react';
import { editorOptions } from 'config';
import styles from './HeadersEditor.module.scss';

interface HeadersEditorProps {
  value: string;
  onHeadersChange: (value: string) => void;
}

export const HeadersEditor = ({ value, onHeadersChange }: HeadersEditorProps) => {
  const onChange: OnChange = (value) => onHeadersChange(value ?? '');
  return (
    <div className={styles.headersEditor}>
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
