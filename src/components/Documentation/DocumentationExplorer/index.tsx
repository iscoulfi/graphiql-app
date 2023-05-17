import { useState } from 'react';
import { GraphQLSchema, GraphQLType } from 'graphql';
import { NavigationContext } from '../NavigationContext';
import { Type } from '../Type';
import { Breadcrumb, Button, Collapse } from 'react-bootstrap';
import { RiBook2Fill, RiBook2Line } from 'react-icons/ri';

export const DocumentationExplorer = ({ schema }: { schema: GraphQLSchema }) => {
  const [type, setType] = useState<GraphQLType | undefined>();
  const [navigationHistory, setNavigationHistory] = useState<string[]>(['Query']);
  const [open, setOpen] = useState(false);

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
      <div className="d-flex align-items-start documentation">
        <Collapse in={open} dimension="width">
          <div className="docs">
            {navigationHistory.length > 0 && (
              <Breadcrumb.Item href="#" onClick={navigateBack}>
                <span className="crumb">{navigationHistory[navigationHistory.length - 2]}</span>
              </Breadcrumb.Item>
            )}
            <Type type={type || query} />
          </div>
        </Collapse>
        <Button variant="secondary" onClick={() => setOpen(!open)} aria-expanded={open}>
          {open ? <RiBook2Fill className="icon" /> : <RiBook2Line className="icon" />}
        </Button>
      </div>
    </NavigationContext.Provider>
  );
};
