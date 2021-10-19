import styled from "styled-components";
import { backgroundDark, primary, secondary } from "../colorScheme";
import { Link } from "react-router-dom";
export const ProjectMainWrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 85vw;
  height: 90vh;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    width: 100vw;
    height: fit-content;
    justify-content: flex-start;
  }
`;

export const ProjectWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${secondary};
  cursor: pointer;
  position: absolute;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${secondary};
  }

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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  font-size: 1rem;
  font-family: Sora-Regular;
  text-align: center;
  transition: 0.375s all ease-in-out;
  width: 350px;
  height: 225px;
  z-index: 2;
  margin-bottom: -25px;
  gap: 15px;
  position: absolute;
`;

export const ProjectDataDetail = styled.p`
  font-family: Sora-Light;
  padding: 0 10px;
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
  
  &:hover,
  &:focus {
    margin-top: -25px;
    opacity: 0;
    background: transparent;
  }

  &:hover + ${ProjectDetail},
  &:focus + ${ProjectDetail} {
    opacity: 1;
    margin-bottom: 0px;
  }
`;

export const ProjectHeading = styled.h1`
  text-align: center;
  color: ${secondary};
  font-family: Sora-SemiBold;
`;