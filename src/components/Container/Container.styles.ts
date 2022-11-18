import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  color: #f1f1f1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Body = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.lg};
  margin: 0 auto;
  padding: 82px 16px 16px 16px;
`;
