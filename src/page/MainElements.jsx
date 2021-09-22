import styled from "styled-components";

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 15vw 70vw 15vw;
  grid-template-rows: auto;
  width: 100vw;
  overflow: hidden;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`;