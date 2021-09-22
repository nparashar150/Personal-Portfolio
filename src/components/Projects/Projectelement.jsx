import styled from "styled-components";
import { backgroundDark, primary, secondary } from "../colorScheme";
import { Link } from "react-router-dom";

export const ProjectWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${secondary};
  cursor: pointer;

  &::before, 
  &::after {
    content: "";
    width: 350px;
    height: 225px;
    position: absolute;
    z-index: 1;
    border: 4px solid ${ primary };
    transition: 0.375s all ease-in-out ;
  }

  &::before {
    transform: translate(7px, 7px);
    border: 4px solid ${ secondary };
    z-index: 0;
  }

  &::after {
    background: ${backgroundDark};
  }
`;
export const ProjectPreview = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 0.75rem;
  z-index: 3;
  width: 350px;
  height: 225px;
  background: ${primary + "50"};
  transition: .375s all ease-in-out;
  position: absolute;
  &:hover,
  &:focus {
    margin-top: -25px;
    opacity: 0;
    background: transparent;
  }
`;
export const ProjectImage = styled.img`
  width: 45px;
  height: 45px;
  overflow: hidden;
  background: transparent;
`;
export const ProjectName = styled.div`
  font-size: 1.75rem;
  font-family: Sora-SemiBold;
  text-align: center;
  
`;
export const ProjectDetail = styled.section`
  opacity: 0;
  font-size: 1rem;
  font-family: Sora-Regular;
  text-align: center;
  transition: 0.375s all ease-in-out;
  width: 350px;
  height: 225px;
  z-index: 2;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;
export const ProjectDataDetail = styled.p`

`;
export const ProjectConnect = styled.div``;
export const ProjectLink = styled(Link)``;
