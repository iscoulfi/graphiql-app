import CodeEditor from '@uiw/react-textarea-code-editor';
import styles from './Response.module.scss';
import PuffLoader from 'react-spinners/PuffLoader';
import { responsePlaceholder } from 'assets';
import { useTranslation } from 'react-i18next';

interface ResponseEditorProps {
  value: string;
  loading: boolean;
}

export const Response = ({ value, loading }: ResponseEditorProps) => {
  const { t } = useTranslation();
  return (
    <>
      {loading && (
        <div className={styles.loaderWrapper}>
          <PuffLoader className={styles.loader} color="#e535ab" />
        </div>
      )}
      <div className={styles.responseEditor}>
        <CodeEditor
          className={styles.responseCode}
          readOnly={true}
          value={value}
          language="graphql"
          placeholder={t(responsePlaceholder) as string}
        />
      </div>
    </>
  );
};
