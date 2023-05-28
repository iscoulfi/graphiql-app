import { buildClientSchema } from 'graphql';
import { useGetGraphQLSchemaQuery } from 'store/api';
import { Suspense, lazy } from 'react';
const DocumentationExplorer = lazy(() => import('./DocumentationExplorer'));

export const Documentation = () => {
  const { data } = useGetGraphQLSchemaQuery();

  if (!data) return null;

  const schema = buildClientSchema(data);

  return (
    <Suspense fallback={null}>
      <DocumentationExplorer schema={schema} />
    </Suspense>
  );
};
