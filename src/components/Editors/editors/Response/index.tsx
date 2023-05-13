import { Editor } from '@monaco-editor/react';
import { editorOptions } from 'config';
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
        <Editor
          loading=""
          language="graphql"
          value={value}
          options={{ ...editorOptions, readOnly: true }}
        />
      </div>
    </>
  );
};
