import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { StringParam, useQueryParam } from 'use-query-params';

import Container from '../../components/Container';
import PeopleDetails from '../../components/PeopleDetails';
import PeopleTable from '../../components/PeopleTable';
import TableLoading from '../../components/TableLoading';
import Toolbar from '../../components/Toolbar';
import getPeople from '../../services/apiRequests/getPeople';
import * as S from './Home.styles';

const Home: React.FC = () => {
  const [rerender, setRerender] = useState(0);
  const [nameQuery, setNameQuery] = useQueryParam('name', StringParam);
  const [selectedCharacterQuery, setSelectedCharacterQuery] = useQueryParam(
    'selected',
    StringParam,
  );

  const [isDetailsOpened, setIsDetailsOpened] = useState(
    !!selectedCharacterQuery,
  );

  const { isLoading, data, isFetching, refetch } = useQuery(
    ['people'],
    () => getPeople({ name: nameQuery }),
    {
      refetchOnWindowFocus: false,
    },
  );

  const handleChangeNameQuery = (characterName: string) => {
    setNameQuery(characterName);
    setRerender(Math.random());
  };

  const handleSelectUser = (userId: string) => {
    setSelectedCharacterQuery(userId);
    setIsDetailsOpened(!!userId);
  };

  const toggleDetailsSection = () => {
    setIsDetailsOpened((prev) => !prev);
    setSelectedCharacterQuery(null);
  };

  useEffect(() => {
    refetch();
  }, [rerender]);

  return (
    <Container>
      <Toolbar
        nameQuery={nameQuery || ''}
        setNameQuery={handleChangeNameQuery}
      />
      <S.Body>
        {isLoading || isFetching ? (
          <TableLoading />
        ) : (
          <PeopleTable
            rows={data?.results || []}
            handleSelectUser={handleSelectUser}
          />
        )}
        {isDetailsOpened && (
          <PeopleDetails toggleSection={toggleDetailsSection} />
        )}
      </S.Body>
    </Container>
  );
};

export default Home;
