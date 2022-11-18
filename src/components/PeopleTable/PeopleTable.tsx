import React from 'react';
import PeopleInterface from '../../interfaces/PeopleInterface';
import * as S from './PeopleTable.styles';

interface PeopleTableProps {
  rows: PeopleInterface[];
}

const PeopleTable: React.FC<PeopleTableProps> = ({ rows }) => {
  return (
    <S.Table>
      <S.Thead>
        <S.Tr>
          <S.Th>Name</S.Th>
          <S.Th>Planet of origin</S.Th>
          <S.Th>Birth year</S.Th>
          <S.Th>Gender</S.Th>
        </S.Tr>
      </S.Thead>
      <S.Tbody>
        {rows.map((character) => (
          <S.Tr key={character.url}>
            <S.Td>{character.name}</S.Td>
            <S.Td>{character.homeworld}</S.Td>
            <S.Td>{character.birth_year}</S.Td>
            <S.Td>{character.gender}</S.Td>
          </S.Tr>
        ))}
      </S.Tbody>
    </S.Table>
  );
};

export default PeopleTable;
