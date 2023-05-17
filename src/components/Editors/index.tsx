import React, { useState } from 'react';
import { HeadersEditor, OperationEditor, VariablesEditor, Response } from './editors';
import { SubmitButton } from './components';
import { useLazyGetGraphQLQuery } from 'store/api';
import { parse } from 'utils';
import styles from './Editors.module.scss';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export const Editors = () => {
  const [operation, setOperation] = useState('');
  const [variables, setVariables] = useState('');
  const [headers, setHeaders] = useState('');
  const [parseError, setParseError] = useState('');
  const [tab, setTab] = useState<string | null>(null);

  const [getGraphQLQuery, graphQLResponse] = useLazyGetGraphQLQuery();
  const { data, error, isFetching } = graphQLResponse;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const parsedData = parse(variables, headers);

      getGraphQLQuery({
        query: operation,
        variables: parsedData.variables,
        headers: parsedData.headers,
      });

      setParseError('');
    } catch (error) {
      if (error instanceof Error) setParseError(error.message);
    }
  };

  const handleTabSelect = (eventKey: string | null) => {
    setTab((prevTab) => (prevTab === eventKey ? null : eventKey));
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.editorWrapper}>
        <OperationEditor value={operation} onOperationChange={setOperation} />
        <Tabs
          className={styles.tabs}
          activeKey={tab ?? ''}
          onSelect={handleTabSelect}
          variant="pills"
        >
          <Tab eventKey="variables" title="Variables">
            {tab === 'variables' && (
              <VariablesEditor value={variables} onVariablesChange={setVariables} />
            )}
          </Tab>
          <Tab eventKey="headers" title="Headers">
            {tab === 'headers' && <HeadersEditor value={headers} onHeadersChange={setHeaders} />}
          </Tab>
        </Tabs>
      </div>
      <SubmitButton loading={isFetching} />
      <div className={styles.responseWrapper}>
        <Response
          value={parseError || JSON.stringify(error) || JSON.stringify(data)}
          loading={isFetching}
        />
      </div>
    </form>
  );
};
