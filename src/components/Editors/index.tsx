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
      <button type="submit">Submit</button>
      <div>
        <OperationEditor value={operation} onOperationChange={(e) => setOperation(e)} />
        <VariablesEditor value={variables} onVariablesChange={(e) => setVariables(e)} />
        <HeadersEditor value={headers} onHeadersChange={(e) => setHeaders(e)} />
      </div>
      <div>
        <Response value="" />
      </div>
    </form>
  );
};
