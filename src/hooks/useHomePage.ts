import { useState } from 'react';
import { StringParam, useQueryParam } from 'use-query-params';

export default function useHomePage() {
  const [nameQuery, setNameQuery] = useQueryParam('name', StringParam);
  const [pageQuery, setPageQuery] = useQueryParam('page', StringParam);
  const [selectedCharacterQuery, setSelectedCharacterQuery] = useQueryParam(
    'selected',
    StringParam,
  );

  const [isDetailsOpened, setIsDetailsOpened] = useState(
    !!selectedCharacterQuery,
  );

  const currentPage = pageQuery ? Number(pageQuery) : 1;

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

  const goToPreviousPage = () => {
    setPageQuery((currentPage - 1).toString());
  };

  const goToNextPage = () => {
    setPageQuery((currentPage + 1).toString());
  };

  const resetPageCounter = () => {
    setPageQuery(null);
  };

  return {
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
  };
}
