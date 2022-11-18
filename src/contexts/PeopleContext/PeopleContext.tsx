import React, { createContext, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

import getPeople from '../../services/apiRequests/getPeople';
import PeopleInterface from '../../interfaces/PeopleInterface';

interface PeopleContextInterface {
  people?: PeopleInterface[];
  nextPage?: string;
  previousPage?: string;
  isLoading?: boolean;
  isFetching?: boolean;
  error?: any;
}

const PeopleContext = createContext<PeopleContextInterface>({});

export const PeopleProvider = ({ children }: React.PropsWithChildren) => {
  const { isLoading, error, data, isFetching } = useQuery(['people'], () =>
    getPeople(),
  );

  const contextValues = useMemo(
    () => ({
      people: data?.results,
      nextPage: data?.next,
      previousPage: data?.previous,
      isLoading,
      isFetching,
      error,
    }),
    [data],
  );

  return (
    <PeopleContext.Provider value={contextValues}>
      {children}
    </PeopleContext.Provider>
  );
};

export default PeopleContext;
