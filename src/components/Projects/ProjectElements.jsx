import styled from 'styled-components'
import { backgroundDark, primary, secondary } from '../Shared/colorScheme'
import { Link } from 'react-router-dom'
export const ProjectMainWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 25rem);
  /* grid-template-rows: repeat(2, 15rem); */
  grid-gap: 7rem;
  row-gap: 7rem;
  height: 100%;
  justify-content: center;
  align-items: start;
  justify-items: center;
  padding: 5rem 0 5rem 3rem;
  z-index: 5;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 100vw;
    grid-template-rows: repeat(30vh);
    grid-gap: 0;
    row-gap: 3rem;
    justify-content: end;
    align-items: center;
    height: 100%;
    padding: 6rem 0 5rem 0rem;
  }
`

export const ProjectWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${secondary};
  cursor: pointer;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${secondary};
  }

  &::before,
  &::after {
    content: '';
    width: 25rem;
    height: 15rem;
    position: absolute;
    z-index: 1;
    border: 2px solid ${primary};
    transition: 0.375s all ease-in-out;
  }

  &::before {
    transform: translate(7px, 7px);
    border: 2px solid ${secondary};
    z-index: 0;
  }

  &::after {
    background: ${backgroundDark};
  }

  @media (max-width: 768px) {
    &::before,
    &::after {
      width: 80vw;
      height: 25vh;
    }
  }
`

export const ProjectImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
  background: transparent;

  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
`
export const ProjectName = styled.div`
  font-size: 1.75rem;
  font-family: Sora-SemiBold;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`
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
  width: 25rem;
  height: 15rem;
  z-index: 2;
  margin-bottom: -25px;
  gap: 15px;
  position: absolute;

  @media (max-width: 768px) {
    width: 80vw;
    height: 25vh;
  }
`

export const ProjectDataDetail = styled.p`
  font-family: Sora-Light;
  padding: 0 10px;
`

export const ProjectPreview = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 0.75rem;
  z-index: 3;
  width: 25rem;
  height: 15rem;
  background: ${primary + '50'};
  transition: 0.375s all ease-in-out;

  &:hover,
  &:focus {
    margin-top: -25px;
    opacity: 0;
    background: transparent;
  }

  &:hover + ${ProjectDetail}, &:focus + ${ProjectDetail} {
    opacity: 1;
    margin-bottom: 0px;
  }

  @media (max-width: 768px) {
    width: 80vw;
    height: 25vh;
  }
`

export const ProjectHeadingWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: -2rem;

  @media (max-width: 768px) {
    padding-bottom: 0;
    margin: 7rem 0 -5rem 0;
  }
`

export const ProjectHeading = styled.h1`
  text-align: center;
  color: ${secondary};
  font-family: Sora-SemiBold;
  padding: 0 0 0 2rem;

  @media (max-width: 768px) {
    padding: 0 calc(10vw + 1rem);
    text-align: left;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin: -2rem 0 2rem 0;
  }
`
