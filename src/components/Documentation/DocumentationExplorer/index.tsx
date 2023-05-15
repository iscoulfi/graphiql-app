import { useState } from 'react';
import { GraphQLSchema, GraphQLType } from 'graphql';
import { NavigationContext } from '../NavigationContext';
import { Type } from '../Type';
import { Breadcrumb } from 'react-bootstrap';
import styles from './DocumentationExplorer.module.scss';

export const DocumentationExplorer = ({ schema }: { schema: GraphQLSchema }) => {
  const [type, setType] = useState<GraphQLType | undefined>();
  const [navigationHistory, setNavigationHistory] = useState<string[]>(['Query']);

  const query = schema.getQueryType();

  if (!query) return null;

  const navigateToType = (type: GraphQLType) => {
    setType(type);
    setNavigationHistory([...navigationHistory, type.toString()]);
  };

  const navigateBack = () => {
    const previousHistory = navigationHistory.slice(0, -1);
    const previousTypeName = previousHistory.at(-1) || 'Query';
    const previousType = schema.getType(previousTypeName);

    setType(previousType);
    setNavigationHistory(previousHistory);
  };

  return (
    <NavigationContext.Provider value={{ navigateToType, navigateBack }}>
      <div className={styles.documentation}>
        {navigationHistory.length > 0 && (
          <Breadcrumb.Item href="#" onClick={navigateBack}>
            {navigationHistory[navigationHistory.length - 2]}
          </Breadcrumb.Item>
        )}
        <Type type={type || query} />
      </div>
    </NavigationContext.Provider>
  );
};
