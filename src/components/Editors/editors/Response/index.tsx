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
          className={styles.responseCode}
          readOnly={true}
          value={value}
          language="graphql"
          placeholder={`{
            "data": {
              "characters": {
                "info": {
                  "count": 107
                },
                "results": [
                  {
                    "name": "Mechanical Rick"
                  },
                  {
                    "name": "Mega Fruit Farmer Rick"
                  },
                  {
                    "name": "Morty Rick"
                  },
                  {
                    "name": "Pickle Rick"
                  },
                  {
                    "name": "Plumber Rick"
                  },
                  {
                    "name": "Quantum Rick"
                  },
                  {
                    "name": "Regional Manager Rick"
                  },
                  {
                    "name": "Reverse Rick Outrage"
                  },
                  {
                    "name": "Rick D. Sanchez III"
                  },
                  {
                    "name": "Rick Guilt Rick"
                  },
                  {
                    "name": "Rick Prime"
                  },
                  {
                    "name": "Rick D-99"
                  },
                  {
                    "name": "Rick D716"
                  },
                  {
                    "name": "Rick D716-B"
                  },
                  {
                    "name": "Rick D716-C"
                  },
                  {
                    "name": "Rick Sanchez"
                  },
                  {
                    "name": "Rick J-22"
                  },
                  {
                    "name": "Rick K-22"
                  },
                  {
                    "name": "Rick Sanchez"
                  },
                  {
                    "name": "Ricktiminus Sancheziminius"
                  }
                ]
              },
              "location": {
                "id": "1"
              },
              "episodesByIds": [
                {
                  "id": "1"
                },
                {
                  "id": "2"
                }
              ]
            }
          }`}
        />
      </div>
    </>
  );
};
