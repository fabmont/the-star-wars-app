import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { StringParam, useQueryParam } from 'use-query-params';
import DetailsItem from './DetailsItem/DetailsItem';

import * as S from './PeopleDetails.styles';

interface PeopleDetailsProps {
  toggleSection(): void;
}

const PeopleDetails: React.FC<PeopleDetailsProps> = ({ toggleSection }) => {
  const [character, setCharacter] = useState(null);
  const [selectedCharacterQuery, setSelectedCharacterQuery] = useQueryParam(
    'selected',
    StringParam,
  );

  return (
    <S.Wrapper>
      <S.Header>
        <S.CloseButton onClick={toggleSection}>
          <MdClose />
        </S.CloseButton>
      </S.Header>
      <S.Title>Luke Skywalker</S.Title>

      <DetailsItem title="Height">1998</DetailsItem>
      <DetailsItem title="Weight">1998</DetailsItem>
      <DetailsItem title="Hair color">1998</DetailsItem>
      <DetailsItem title="Skin color">1998</DetailsItem>
      <DetailsItem title="Eye color">1998</DetailsItem>
      <DetailsItem title="Birth year">1998</DetailsItem>
      <DetailsItem title="Gender">1998</DetailsItem>
      <DetailsItem title="Planet of origin">1998</DetailsItem>
      <DetailsItem title="Appearence in movies">1998</DetailsItem>
      <DetailsItem title="Starships">1998</DetailsItem>
    </S.Wrapper>
  );
};

export default PeopleDetails;
