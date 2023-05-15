import { buildClientSchema } from 'graphql';
import { useGetGraphQLSchemaQuery } from 'store/api';
import { DocumentationExplorer } from './DocumentationExplorer';

export const Documentation = () => {
  const { data } = useGetGraphQLSchemaQuery();

  if (!data) return null;

  const schema = buildClientSchema(data);

  return <DocumentationExplorer schema={schema} />;
};
