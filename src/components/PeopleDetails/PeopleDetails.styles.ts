import { darken } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 425px;
  padding: 16px;
  border-left: 1px solid ${darken(0.85, 'white')};
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
`;

export const CloseButton = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
  cursor: pointer;
`;

export const Title = styled.span`
  font-size: 24px;
`;
