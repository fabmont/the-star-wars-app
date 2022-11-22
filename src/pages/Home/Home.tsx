import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { StringParam, useQueryParam } from 'use-query-params';

import Container from '../../components/Container';
import PeopleDetails from '../../components/PeopleDetails';
import PeopleTable from '../../components/PeopleTable';
import TableLoading from '../../components/TableLoading';
import Toolbar from '../../components/Toolbar';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import getPeople from '../../services/apiRequests/getPeople';
import * as S from './Home.styles';

const Home: React.FC = () => {
  const { width } = useWindowDimensions();
  const [nameQuery, setNameQuery] = useQueryParam('name', StringParam);
  const [pageQuery] = useQueryParam('page', StringParam);
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
  };

  const handleSelectUser = (userId: string) => {
    setSelectedCharacterQuery(userId);
    setIsDetailsOpened(!!userId);
  };

  const toggleDetailsSection = () => {
    setSelectedCharacterQuery(null);
    setIsDetailsOpened((prev) => !prev);
  };

  const shouldHidePeopleTable = width < 1024 && isDetailsOpened;

  useEffect(() => {
    refetch();
  }, [nameQuery, pageQuery]);

  return (
    <Container>
      <Toolbar
        nameQuery={nameQuery || ''}
        setNameQuery={handleChangeNameQuery}
      />
      <S.Body>
        {/* {(isLoading || isFetching) && shouldHidePeopleTable && <TableLoading />} */}
        {(!isLoading || !isFetching) && !shouldHidePeopleTable ? (
          <PeopleTable
            rows={data?.results || []}
            handleSelectUser={handleSelectUser}
          />
        ) : (
          !shouldHidePeopleTable && <TableLoading />
        )}

        {isDetailsOpened && (
          <PeopleDetails toggleSection={toggleDetailsSection} />
        )}
      </S.Body>
    </Container>
  );
};

export default Home;
