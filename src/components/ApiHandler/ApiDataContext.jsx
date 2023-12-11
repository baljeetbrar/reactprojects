import { createContext, useContext } from 'react';

const ApiDataContext = createContext();

export const useApiData = () => {
  return useContext(ApiDataContext);
};

export default ApiDataContext;