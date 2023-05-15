import {
  GraphQLType,
  GraphQLScalarType,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLList,
} from 'graphql';
import { Field } from '../Field';

export const Type = ({ type }: { type: GraphQLType }) => {
  if (type instanceof GraphQLScalarType) {
    return (
      <div>
        <h3 id={type.name}>{type.name}</h3>
        <p>{type.description}</p>
      </div>
    );
  }

  if (type instanceof GraphQLObjectType || type instanceof GraphQLInputObjectType) {
    const fields = type.getFields();

    return (
      <div>
        <h3 id={type.name}>{type.name}</h3>
        <p>{type.description}</p>
        <h6>Fields:</h6>
        <ul>
          {Object.values(fields).map((field) => (
            <li key={field.name}>
              <Field field={field} isInput={() => type instanceof GraphQLInputObjectType} />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (type instanceof GraphQLList) {
    const { ofType } = type;

    return <Type type={ofType} />;
  }

  return null;
};
