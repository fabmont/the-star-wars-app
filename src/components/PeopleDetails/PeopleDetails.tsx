/* eslint-disable react/jsx-one-expression-per-line */
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { MdClose } from 'react-icons/md';
import Skeleton from 'react-loading-skeleton';
import { StringParam, useQueryParam } from 'use-query-params';
import getCharacter from '../../services/apiRequests/getCharacter';
import getCharacterMovies from '../../services/apiRequests/getCharacterMovies';
import getCharacterPlanet from '../../services/apiRequests/getCharacterPlanet';
import getCharacterStarships from '../../services/apiRequests/getCharacterStarships';
import DetailsItem from './DetailsItem/DetailsItem';

import * as S from './PeopleDetails.styles';

interface PeopleDetailsProps {
  toggleSection(): void;
}

const PeopleDetails: React.FC<PeopleDetailsProps> = ({ toggleSection }) => {
  const [selectedCharacterQuery] = useQueryParam('selected', StringParam);

  const { data: character, isLoading: isCharacterLoading } = useQuery(
    [`person/${selectedCharacterQuery}`],
    () => getCharacter(selectedCharacterQuery || ''),
  );

  const movieIds = character?.films?.map((item) =>
    item.replace('https://swapi.dev/api/films/', '').replace('/', ''),
  );
  const starshipIds = character?.starships?.map((item) =>
    item.replace('https://swapi.dev/api/starships/', '').replace('/', ''),
  );
  const planetId = character?.homeworld
    .replace('https://swapi.dev/api/planets/', '')
    .replace('/', '');

  const { data: movies, isLoading: isLoadingMovies } = useQuery(
    [`movies/${selectedCharacterQuery}`],
    () => getCharacterMovies(movieIds || []),
    {
      enabled: !isCharacterLoading && !!character,
    },
  );

  const { data: starships, isLoading: isLoadingStarships } = useQuery(
    [`starships/${selectedCharacterQuery}`],
    () => getCharacterStarships(starshipIds || []),
    {
      enabled: !isCharacterLoading && !!character,
    },
  );

  const { data: planet, isLoading: isLoadingPlanet } = useQuery(
    [`planet/${selectedCharacterQuery}`],
    () => getCharacterPlanet(planetId || ''),
    {
      enabled: !isCharacterLoading && !!character,
    },
  );

  return (
    <S.Wrapper>
      <S.Header>
        <S.CloseButton onClick={toggleSection}>
          <MdClose />
        </S.CloseButton>
      </S.Header>

      {isCharacterLoading ? (
        <>
          <Skeleton height={32} width="50%" />
          <br />
          <Skeleton height={24} count={10} />
        </>
      ) : (
        <>
          <S.Title>{character?.name}</S.Title>

          <DetailsItem title="Height">{character?.height} cm</DetailsItem>
          <DetailsItem title="Weight">{character?.mass} kg</DetailsItem>
          <DetailsItem title="Hair color">{character?.hair_color}</DetailsItem>
          <DetailsItem title="Skin color">{character?.skin_color}</DetailsItem>
          <DetailsItem title="Eye color">{character?.eye_color}</DetailsItem>
          <DetailsItem title="Birth year">{character?.birth_year}</DetailsItem>
          <DetailsItem title="Gender">{character?.gender}</DetailsItem>
          <DetailsItem title="Planet of origin">
            {isLoadingPlanet ? (
              <Skeleton height={12} count={1} />
            ) : (
              planet?.name
            )}
          </DetailsItem>
          <DetailsItem title="Appearence in movies">
            {isLoadingMovies ? (
              <Skeleton height={12} count={4} />
            ) : (
              <ul>
                {movies?.map((movie) => (
                  <li key={movie?.url}>{movie?.title}</li>
                ))}
              </ul>
            )}
          </DetailsItem>

          <DetailsItem title="Starships">
            {isLoadingStarships ? (
              <Skeleton height={12} count={4} />
            ) : (
              <ul>
                {starships?.map((starship) => (
                  <li key={starship?.url} className="starship-list-item">
                    <div>{starship?.name}</div>
                    <div className="starship-model">
                      Model: {starship.model}
                    </div>
                    <div className="starship-manufacturer">
                      Manufacturer: {starship.manufacturer}
                    </div>
                  </li>
                ))}
                {!starships?.length && 'No starships.'}
              </ul>
            )}
          </DetailsItem>
        </>
      )}
    </S.Wrapper>
  );
};

export default PeopleDetails;
