import styled from 'styled-components';

export const Wrapper = styled.div`
  border-bottom: ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  top: 0;
  position: sticky;
  width: 100%;
  z-index: 100;
`;

export const InnerWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.lg};
  padding: 16px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const Logo = styled.div`
  .start-wars-name {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.4rem;
  }

  .app-name {
    font-weight: 300;
  }
`;
