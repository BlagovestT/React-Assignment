import styled from "styled-components";

export const PageFrame = styled.div`
  max-width: 3000px;
  margin: 0 auto;
`;

export const MainContainer = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Content = styled.section`
  background-color: #f2f8fd;
  width: 87%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
