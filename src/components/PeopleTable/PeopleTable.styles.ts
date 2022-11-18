import styled from 'styled-components';
import { lighten } from 'polished';

export const Table = styled.table`
  width: 100%;
  background: ${({ theme }) => lighten(0.05, theme.colors.background)};
  overflow-x: auto;
  border-radius: 14px;
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
  border-bottom: 1px solid ${lighten(0.08, 'black')};
`;

export const Td = styled.td`
  padding: 24px;
`;
