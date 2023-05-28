import { GraphQLType } from 'graphql';
import { createContext } from 'react';

interface NavigationContextProps {
  navigateToType: (type: GraphQLType) => void;
  navigateBack: () => void;
}

export const NavigationContext = createContext<NavigationContextProps>({
  navigateToType: () => {},
  navigateBack: () => {},
});
