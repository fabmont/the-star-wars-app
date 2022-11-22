import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin-top: 16px;
`;

export const ListItem = styled.li`
  .list-item-title {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary};
    opacity: 0.8;
  }

  ul {
    list-style: none;
  }

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;
