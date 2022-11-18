import React from 'react';
import * as S from './Header.styles';

const Header: React.FC = () => {
  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.Logo>
          <span className="start-wars-name">StarWars</span>
          <span className="app-name">App</span>
        </S.Logo>
      </S.InnerWrapper>
    </S.Wrapper>
  );
};

export default Header;
