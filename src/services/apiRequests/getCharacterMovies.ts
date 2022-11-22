import axios from '../axios';
import MovieInterface from '../../interfaces/MovieInterface';

export default async function getCharacterMovies(
  movieIdList: number[] | string[],
) {
  const urls = movieIdList?.map((id) =>
    axios.get<MovieInterface>(`/films/${id}`),
  );

  const movieData = await Promise.all(urls);

  return movieData.map((movie) => movie.data);
}
