/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import useDebounce from '../../hooks/useDebounce';
import * as S from './Toolbar.styles';

interface ToolbarProps {
  nameQuery: string;
  setNameQuery(characterName: string | number | null): void;
  currentPage: string | number;
  totalPages: string | number | null;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  canGoBack: boolean;
  canGoForward: boolean;
  isLoadingData: boolean;
  resetPageCounter: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  nameQuery,
  setNameQuery,
  currentPage,
  totalPages,
  goToNextPage,
  goToPreviousPage,
  canGoBack,
  canGoForward,
  isLoadingData,
  resetPageCounter,
}) => {
  const [searchDisplayValue, setSearchDisplayValue] = useState(nameQuery);
  const debouncedValue = useDebounce(searchDisplayValue, 500);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchDisplayValue(e.target.value);
    resetPageCounter();
  };

  useEffect(() => {
    if (debouncedValue) {
      setNameQuery(debouncedValue);
    } else {
      setNameQuery(null);
    }
  }, [debouncedValue]);

  return (
    <S.Wrapper>
      <S.SearchInput
        placeholder="Search characters..."
        value={searchDisplayValue}
        onChange={handleSearch}
      />

      {totalPages && (
        <S.PaginationWrapper>
          <S.PaginationButton
            disabled={!canGoBack || isLoadingData}
            onClick={goToPreviousPage}
          >
            <MdArrowBack />
          </S.PaginationButton>
          <span className="pagination-counter">
            {currentPage} of {totalPages}
          </span>
          <S.PaginationButton
            disabled={!canGoForward || isLoadingData}
            onClick={goToNextPage}
          >
            <MdArrowForward />
          </S.PaginationButton>
        </S.PaginationWrapper>
      )}
    </S.Wrapper>
  );
};

export default Toolbar;
