import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  padding: 8px;
  min-width: 320px;
  max-width: 1260px;

  width: 320px;
  height: auto;

  font-size: 1rem;
  @media (min-width: 768px) {
    width: 768px;
    font-size: 1, 5rem;
  }
  @media (min-width: 1200px) {
    width: 1200px;
    font-size: 1, 75rem;
  }
`;

export const TodoWrapper = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
  border: 8px solid pink;
`;
