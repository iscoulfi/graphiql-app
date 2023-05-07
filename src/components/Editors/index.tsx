import React, { useState } from 'react';
import { HeadersEditor, OperationEditor, VariablesEditor, Response } from './editors';
import styles from './Editors.module.scss';

export const Editors = () => {
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
    <form className={styles.container} onSubmit={handleSubmit}>
      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
      <div className={styles.editorWrapper}>
        <OperationEditor value={operation} onOperationChange={setOperation} />
        <div className={styles.operationWrapper}>
          <VariablesEditor value={variables} onVariablesChange={setVariables} />
          <HeadersEditor value={headers} onHeadersChange={setHeaders} />
        </div>
      </div>
      <div className={styles.responseWrapper}>
        <Response value="" />
      </div>
    </form>
  );
};
