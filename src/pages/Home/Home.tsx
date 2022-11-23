import React, { useEffect } from 'react';

import Container from '../../components/Container';
import PeopleDetails from '../../components/PeopleDetails';
import PeopleTable from '../../components/PeopleTable';
import TableLoading from '../../components/TableLoading';
import Toolbar from '../../components/Toolbar';
import useCharacters from '../../hooks/useCharacters';
import useHomePage from '../../hooks/useHomePage';
import * as S from './Home.styles';

const Home: React.FC = () => {
  const {
    nameQuery,
    pageQuery,
    isDetailsOpened,
    handleChangeNameQuery,
    handleSelectUser,
    toggleDetailsSection,
    goToPreviousPage,
    goToNextPage,
    currentPage,
    resetPageCounter,
  } = useHomePage();

  const { isLoading, data, isFetching, refetch, error } = useCharacters({
    nameQuery,
    pageQuery,
  });

  const isPageLoading = isLoading || isFetching;

  useEffect(() => {
    refetch();
  }, [nameQuery, pageQuery]);

  return (
    <Container>
      <Toolbar
        nameQuery={nameQuery || ''}
        setNameQuery={handleChangeNameQuery}
        currentPage={currentPage}
        totalPages={
          data?.count ? Math.ceil(Number(data?.count || 1) / 10) : null
        }
        canGoBack={!!data?.previous}
        canGoForward={!!data?.next}
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
        isLoadingData={isLoading || isFetching}
        resetPageCounter={resetPageCounter}
      />
      <S.Body>
        {isPageLoading ? (
          <TableLoading />
        ) : (
          <PeopleTable
            rows={data?.results || []}
            handleSelectUser={handleSelectUser}
            error={(error as { message: string })?.message}
            isDetailsOpened={isDetailsOpened}
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
