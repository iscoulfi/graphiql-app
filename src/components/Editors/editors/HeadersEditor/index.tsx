import CodeEditor from '@uiw/react-textarea-code-editor';
import styles from './HeadersEditor.module.scss';

interface HeadersEditorProps {
  value: string;
  onHeadersChange: (value: string) => void;
}

export const HeadersEditor = ({ value, onHeadersChange }: HeadersEditorProps) => {
  return (
    <div className={styles.headersEditor}>
      <CodeEditor
        value={value}
        language="json"
        placeholder="Please enter JS code."
        onChange={(e) => onHeadersChange(e.target.value)}
        padding={15}
        style={{
          height: '100%',
          fontSize: 12,
          backgroundColor: '#f5f5f5',
          fontFamily:
            'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
      />
    </div>
  );
};
