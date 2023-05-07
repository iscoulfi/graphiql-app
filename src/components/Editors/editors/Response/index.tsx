import { Editor } from '@monaco-editor/react';
import { editorOptions } from 'config';
import styles from './Response.module.scss';

interface ResponseEditorProps {
  value: string;
}

export const Response = ({ value }: ResponseEditorProps) => {
  return (
    <div className={styles.responseEditor}>
      <Editor language="graphql" value={value} options={{ ...editorOptions, readOnly: true }} />
    </div>
  );
};
