import CodeEditor from '@uiw/react-textarea-code-editor';
import styles from './OperationEditor.module.scss';

interface OperationEditorProps {
  value: string;
  onOperationChange: (value: string) => void;
}

export const OperationEditor = ({ value, onOperationChange }: OperationEditorProps) => {
  return (
    <div className={styles.operationEditor}>
      <CodeEditor
        value={value}
        language="graphql"
        placeholder="query {
  
        }
        "
        onChange={(e) => onOperationChange(e.target.value)}
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
