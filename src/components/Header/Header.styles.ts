import styled from 'styled-components';

export const Wrapper = styled.div`
  border-bottom: ${({ theme }) => theme.colors.border};
  top: 0;
  position: sticky;
  width: 100%;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
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
