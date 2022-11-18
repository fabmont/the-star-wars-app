import styled from 'styled-components';
import { lighten } from 'polished';

export const Table = styled.table`
  width: 100%;
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
  border-bottom: 1px solid ${lighten(0.08, 'black')};
`;
