import { GraphQLField, GraphQLInputField } from 'graphql';
import { TypeLink } from '../TypeLink';

interface FieldProps<
  T extends GraphQLField<unknown, unknown> | GraphQLInputField = GraphQLField<unknown, unknown>
> {
  field: T;
  isInput(): this is FieldProps<GraphQLInputField>;
}

export const Field = ({ field, isInput }: FieldProps) => {
  return (
    <div>
      <div>
        <span>{field.name}</span>
        {!isInput() && field.args.length > 0 && (
          <span>
            ({' '}
            {field.args.map((arg, idx) => (
              <span key={arg.name}>
                <span>{arg.name}</span>: <TypeLink type={arg.type} />
                {idx === field.args.length - 1 ? ' ' : ', '}
              </span>
            ))}
            )
          </span>
        )}
        : <TypeLink type={field.type} />
      </div>
      <p>{field.description}</p>
    </div>
  );
};
