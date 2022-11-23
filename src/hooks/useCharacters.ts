import { useQuery } from '@tanstack/react-query';
import getPeople from '../services/apiRequests/getPeople';

interface UseCharactersParams {
  nameQuery?: string | null;
  pageQuery?: string | null;
}

export default function useCharacters({
  nameQuery,
  pageQuery,
}: UseCharactersParams) {
  const { isLoading, data, isFetching, refetch, error } = useQuery(
    ['people'],
    () => getPeople({ name: nameQuery, page: pageQuery }),
    {
      refetchOnWindowFocus: false,
    },
  );

  return { isLoading, data, isFetching, refetch, error };
}
