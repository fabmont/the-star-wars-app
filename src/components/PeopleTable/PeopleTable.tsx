/* eslint-disable operator-linebreak */
import React from 'react';
import PeopleInterface from '../../interfaces/PeopleInterface';
import * as S from './PeopleTable.styles';

interface PeopleTableProps {
  rows: PeopleInterface[];
  // eslint-disable-next-line no-unused-vars
  handleSelectUser: (userId: string) => void;
  error: string | null;
  isDetailsOpened?: boolean;
}

const PeopleTable: React.FC<PeopleTableProps> = ({
  rows,
  handleSelectUser,
  error,
  isDetailsOpened,
}) => {
  const onCharacterSelect = (characterUrl: string) => {
    const characterId = characterUrl
      .replace('https://swapi.dev/api/people/', '')
      .replace('/', '');

    handleSelectUser(characterId);
  };

  return (
    <S.TableWrapper
      data-testId="character-table"
      isDetailsOpened={isDetailsOpened}
    >
      <S.Table className="people-table">
        <S.Thead>
          <S.Tr>
            <S.Th>Name</S.Th>
            <S.Th>Gender</S.Th>
            <S.Th>Birth year</S.Th>
            <S.Th>Eye color</S.Th>
            <S.Th>Hair color</S.Th>
          </S.Tr>
        </S.Thead>
        <S.Tbody>
          {!error &&
            rows.map((character) => (
              <S.Tr key={character.url}>
                <S.Td>
                  <S.CharacterNameButton
                    onClick={() => onCharacterSelect(character.url)}
                  >
                    {character.name}
                  </S.CharacterNameButton>
                </S.Td>
                <S.Td>{character.gender}</S.Td>
                <S.Td>{character.birth_year}</S.Td>
                <S.Td>{character.eye_color}</S.Td>
                <S.Td>{character.hair_color}</S.Td>
              </S.Tr>
            ))}
          {error && (
            <S.Tr>
              <S.Td colSpan={5} style={{ textAlign: 'center' }}>
                {error}
              </S.Td>
            </S.Tr>
          )}
        </S.Tbody>
      </S.Table>
    </S.TableWrapper>
  );
};

export default PeopleTable;
