import React, { createContext, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

import getPlanets from '../../services/apiRequests/getPlanets';
import PeopleInterface from '../../interfaces/PeopleInterface';

interface PlanetsContextInterface {
  people?: PeopleInterface[];
  nextPage?: string;
  previousPage?: string;
  isLoading?: boolean;
  isFetching?: boolean;
  error?: any;
}

const PlanetsContext = createContext<PlanetsContextInterface>({});

export const PlanetsProvider = ({ children }: React.PropsWithChildren) => {
  const { isLoading, error, data, isFetching } = useQuery(['planets'], () =>
    getPlanets(),
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
    <PlanetsContext.Provider value={contextValues}>
      {children}
    </PlanetsContext.Provider>
  );
};

export default PlanetsContext;
