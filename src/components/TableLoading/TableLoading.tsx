import React from 'react';
import Skeleton from 'react-loading-skeleton';
import * as S from './TableLoading.styles';

const TableLoading: React.FC = () => (
  <S.Wrapper>
    <Skeleton count={10} height="80px" />
  </S.Wrapper>
);

export default TableLoading;
