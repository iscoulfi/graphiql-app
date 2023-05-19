import CodeEditor from '@uiw/react-textarea-code-editor';
import { headersPlaceholder } from 'assets';
import styles from './HeadersEditor.module.scss';

interface HeadersEditorProps {
  value: string;
  onHeadersChange: (value: string) => void;
}

export const HeadersEditor = ({ value, onHeadersChange }: HeadersEditorProps) => {
  return (
    <div>
      <CodeEditor
        className={styles.headersEditor}
        value={value}
        language="json"
        placeholder={headersPlaceholder}
        onChange={(e) => onHeadersChange(e.target.value)}
      />
    </div>
  );
};
