import React from 'react';
import Header from '../Header';
import * as S from './Container.styles';

const Container = ({ children }: React.PropsWithChildren) => (
  <S.Wrapper>
    <Header />
    <S.Body>{children}</S.Body>
  </S.Wrapper>
);

export default Container;
