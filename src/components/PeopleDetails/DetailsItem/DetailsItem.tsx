import React from 'react';
import * as S from './DetailsItem.styles';

interface DetailsItemProps {
  title: React.ReactNode;
}

const DetailsItem = ({
  title,
  children,
}: React.PropsWithChildren<DetailsItemProps>) => (
  <S.List>
    <S.ListItem>
      <div className="list-item-title">{title}</div>
      <div className="list-item-content">{children}</div>
    </S.ListItem>
  </S.List>
);

export default DetailsItem;
