import axios from '../axios';
import StarshipInterface from '../../interfaces/StarshipInterface';

export default async function getCharacterStarships(
  starshipsIdList: number[] | string[],
) {
  const urls = starshipsIdList?.map((id) =>
    axios.get<StarshipInterface>(`/starships/${id}`),
  );

  const starshipsData = await Promise.all(urls);

  return starshipsData.map((movie) => movie.data);
}
