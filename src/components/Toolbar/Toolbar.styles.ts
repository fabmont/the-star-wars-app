import { darken, lighten } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: sticky;
  top: 66px;
  padding: 16px;
  background: ${({ theme }) => lighten(0.05, theme.colors.background)};
  border-bottom: 1px solid ${darken(0.85, 'white')};
  z-index: 99;
`;

export const SearchInput = styled.input`
  border: 1px solid ${darken(0.85, 'white')};
  background: ${darken(0.9, 'white')};
  padding: 8px 12px;
  border-radius: 8px;
  outline: none;
  color: #fff;
  min-width: 240px;

  &:active,
  &:focus {
    border: 1px solid ${({ theme }) => darken(0.4, theme.colors.primary)};
  }
`;
