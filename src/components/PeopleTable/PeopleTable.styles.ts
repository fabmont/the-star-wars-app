import styled from 'styled-components';
import { lighten } from 'polished';

export const Table = styled.table`
  width: 100%;
  height: max-content;
  overflow-x: auto;
  border-collapse: collapse;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  padding: 24px;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 12px;
  background: ${({ theme }) => lighten(0.05, theme.colors.background)};
`;

export const Td = styled.td`
  padding: 24px;
  border-bottom: ${({ theme }) => theme.colors.border};
`;

export const CharacterNameButton = styled.button`
  border: 0;
  background: 0;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => lighten(0.2, theme.colors.primary)};
  }
`;
