/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import * as S from './Toolbar.styles';

interface ToolbarProps {
  nameQuery: string;
  setNameQuery(characterName: string | number | null): void;
}

const Toolbar: React.FC<ToolbarProps> = ({ nameQuery, setNameQuery }) => {
  const [searchDisplayValue, setSearchDisplayValue] = useState(nameQuery);
  const debouncedValue = useDebounce(searchDisplayValue, 500);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchDisplayValue(e.target.value);

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
    </S.Wrapper>
  );
};

export default Toolbar;
