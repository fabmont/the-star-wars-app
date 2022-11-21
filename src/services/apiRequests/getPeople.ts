import axios from '../axios';
import PeopleInterface from '../../interfaces/PeopleInterface';

interface QueryParams {
  name?: string | null;
}

interface ResponseResult {
  count: number;
  next: string;
  previous: string;
  results: PeopleInterface[];
}

export default async function getPeople(queryParams: QueryParams) {
  const { data } = await axios.get<ResponseResult>('/people', {
    params: {
      search: queryParams.name,
    },
  });

  return data;
}
