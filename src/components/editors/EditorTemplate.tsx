import React, { useState } from 'react';
import HeadersEditor from './HeadersEditor';
import OperationEditor from './OperationEditor';
import VariablesEditor from './VariablesEditor';
import styles from './editors.module.css';

const Editors = () => {
  const [operation, setOperation] = useState('');
  const [variables, setVariables] = useState('');
  const [headers, setHeaders] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Operation:', operation);
    console.log('Variables:', variables);
    console.log('Headers:', headers);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <button type="submit">Submit</button>
        <div>
          <div className={styles.operationEditor}>
            <OperationEditor value={operation} onOperationChange={(e) => setOperation(e)} />
          </div>
          <div className={styles.variablesEditor}>
            <VariablesEditor value={variables} onVariablesChange={(e) => setVariables(e)} />
            <HeadersEditor value={headers} onHeadersChange={(e) => setHeaders(e)} />
          </div>
        </div>
        <div className={styles.response}>Response</div>
      </div>
    </form>
  );
};

export default Editors;
