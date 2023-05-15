import { useContext } from 'react';
import { GraphQLType, GraphQLList, GraphQLNonNull } from 'graphql';
import { NavigationContext } from '../NavigationContext';

export const TypeLink = ({ type }: { type: GraphQLType }) => {
  const { navigateToType } = useContext(NavigationContext);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateToType(type);
  };

  if (type instanceof GraphQLNonNull || type instanceof GraphQLList) {
    return (
      <>
        {type instanceof GraphQLList && '['}
        <TypeLink type={type.ofType} />
        {type instanceof GraphQLNonNull ? '!' : ''}
        {type instanceof GraphQLList && ']'}
      </>
    );
  } else {
    return (
      <a href="#" onClick={handleClick}>
        {type.toString()}
      </a>
    );
  }
};
