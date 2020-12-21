import React, { createContext } from 'react';

interface IDependencyContext {

}

export const DependencyContext = createContext<IDependencyContext>();

export default const DependencyProvider: React.FC = ({children}) => {
  return (
    <DependencyContext.Provider>{children}</DependencyContext.Provider>
  );
}
