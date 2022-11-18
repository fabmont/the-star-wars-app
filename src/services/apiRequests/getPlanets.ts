import axios from '../axios';
import PeopleInterface from '../../interfaces/PeopleInterface';

interface ResponseResult {
  count: number;
  next: string;
  previous: string;
  results: PeopleInterface[];
}

export default async function getPlanets() {
  const { data } = await axios.get<ResponseResult>('/planets');

  return data;
}
