import axios from '../axios';
import PeopleInterface from '../../interfaces/PeopleInterface';

interface ResponseResult {
  count: number;
  next: string;
  previous: string;
  results: PeopleInterface[];
}

export default async function getPeople() {
  const { data } = await axios.get<ResponseResult>('/people');

  return data;
}
