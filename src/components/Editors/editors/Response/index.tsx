import CodeEditor from '@uiw/react-textarea-code-editor';
import styles from './Response.module.scss';
import PuffLoader from 'react-spinners/PuffLoader';

interface ResponseEditorProps {
  value: string;
  loading: boolean;
}

export const Response = ({ value, loading }: ResponseEditorProps) => {
  return (
    <>
      {loading && (
        <div className={styles.loaderWrapper}>
          <PuffLoader className={styles.loader} color="#e535ab" />
        </div>
      )}
      <div className={styles.responseEditor}>
        <CodeEditor
          readOnly={true}
          value={value}
          language="graphql"
          placeholder="//response.."
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
    </>
  );
};
