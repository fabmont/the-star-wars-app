import axios from '../axios';
import PeopleInterface from '../../interfaces/PeopleInterface';

export default async function getCharacter(id: number | string) {
  const { data } = await axios.get<PeopleInterface>(`/people/${id}`);

  return data;
}
