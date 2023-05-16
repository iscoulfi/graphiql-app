import CodeEditor from '@uiw/react-textarea-code-editor';
import styles from './VariablesEditor.module.scss';

interface VariablesEditorProps {
  value: string;
  onVariablesChange: (value: string) => void;
}

export const VariablesEditor = ({ value, onVariablesChange }: VariablesEditorProps) => {
  return (
    <div className={styles.variablesEditor}>
      <CodeEditor
        value={value}
        language="json"
        placeholder=""
        onChange={(e) => onVariablesChange(e.target.value)}
        padding={15}
        style={{
          height: '100%',
          fontSize: 16,
          backgroundColor: '#f5f5f5',
          fontFamily:
            'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
      />
    </div>
  );
};
