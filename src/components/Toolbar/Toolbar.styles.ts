import { darken, lighten } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: sticky;
  top: 66px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: ${({ theme }) => lighten(0.05, theme.colors.background)};
  border-bottom: 1px solid ${darken(0.85, 'white')};
  z-index: 99;

  @media (max-width: 425px) {
    flex-direction: column;
  }
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

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  .pagination-counter {
    font-size: 12px;
  }

  @media (max-width: 425px) {
    margin-top: 16px;
  }
`;

export const PaginationButton = styled.button`
  border: 1px solid ${darken(0.85, 'white')};
  background: ${darken(0.9, 'white')};
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => darken(0.4, theme.colors.primary)};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
