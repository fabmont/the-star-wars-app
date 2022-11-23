import axios from '../axios';
import PlanetInterface from '../../interfaces/PlanetInterface';

export default async function getCharacterPlanet(id: number | string) {
  const { data } = await axios.get<PlanetInterface>(`/planets/${id}`);

  return data;
}
