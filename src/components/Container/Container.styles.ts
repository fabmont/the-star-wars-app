import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  color: #f1f1f1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
