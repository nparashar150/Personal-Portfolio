import { Link } from "react-router-dom";
import styled, {keyframes} from "styled-components";
import {
  backgroundDark,
  hightlightBlue,
  primary,
  secondary,
} from "../colorScheme";
import {fadeInLeft} from "react-animations";

const NavAnimation = keyframes`${fadeInLeft}`;

export const NavWrapper = styled.nav`
  background: ${backgroundDark};
  height: 100vh;
  width: 6vw;
  position: sticky;
  left: 0;
  border-right: 4px solid ${secondary};
  z-index: 5;
  transition: 0.375s ease-in-out;
  animation: 2s ${NavAnimation};

  &:hover,
  &:focus {
    width: 10vw;
  }

  @media (max-width: 1024px) {
    width: 10vw;

    &:hover,
    &:focus {
      width: 14vw;
    }
  }

  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;

    &:hover,
    &:focus {
      width: 100vw;
    }
  }
`;

export const NavElements = styled.div`
  align-items: center;
  color: ${secondary};
  display: flex;
  position: absolute;
  flex-direction: column;
  font-family: "Sora-Light";
  font-size: 0.9rem;
  justify-content: center;
  height: 100vh;
  width: 6vw;
  transition: 0.375s ease-in-out;
  animation: 1.375s ${NavAnimation};

  &:hover,
  &:focus {
    width: 10vw;
  }

  @media (max-width: 1024px) {
    width: 10vw;

    &:hover,
    &:focus {
      width: 14vw;
    }
  }

  @media (max-width: 768px) {
    width: 100vw;
    padding: 2rem 0;
    &:hover,
    &:focus {
      width: 100vw;
    }
  }
`;

export const NavLinks = styled.div`
  border: 1px solid ${secondary};
  border-right: 0px;
  border-left: 0px;
  cursor: pointer;
  width: 6vw;
  text-align: center;
  padding: 0.9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.375s ease-in-out;
  animation: 1.375s ${NavAnimation};

  &:nth-of-type(5),
  &:nth-of-type(4),
  &:nth-of-type(3),
  &:nth-of-type(2) {
    border-top: 0px;
  }
  &:hover,
  &:focus {
    a {
      color: ${hightlightBlue};
    }
    width: 9.9vw;
    outline: 2px solid ${primary};
  }
  a {
    color: ${secondary};
    text-decoration: none;
    transition: 0.375s ease-in-out;
  }

  @media (max-width: 1024px) {
    width: 10vw;

    &:hover,
    &:focus {
      width: 13vw;
    }
  }

  @media (max-width: 768px) {
    width: 49.5vw;

    &:hover,
    &:focus {
      width: 98vw;
    }
  }
`;

export const NavSocialIcons = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1.6rem;
  flex-direction: column;
  width: 5vw;
  transition: 0.375s ease-in-out;
  animation: 1.375s ${NavAnimation};

  &:hover,
  &:focus {
    width: 9vw;
  }

  @media (max-width: 1024px) {
    width: 10vw;

    &:hover,
    &:focus {
      width: 11.7vw;
    }
  }

  @media (max-width: 768px) {
    width: 49.5vw;

    &:hover,
    &:focus {
      width: 99vw;
    }
  }
  a {
    text-decoration: none;
    &:hover,
    &:focus {
      text-decoration: none;
    }
  }

  svg {
    color: ${secondary};
    cursor: pointer;
    width: 5vw;
    height: 3rem;
    padding: 0.8rem 0;
    transition: 0.375s ease-in-out;

    &:hover {
      color: ${hightlightBlue};
      width: 8.9vw;
    }

    @media (max-width: 768px) {
      width: 49.5vw;

      &:hover,
      &:focus {
        width: 99vw;
      }
    }
  }
`;

export const NavImage = styled(Link)`
  width: 5rem;
  height: 5rem;
  overflow: hidden;
  background: transparent;
  position: absolute;
  top: 0;
  /* margin-top: 25%; */
  display: flex;
  padding: 1.5vw;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: 0.375s ease-in-out;
  animation: 1.375s ${NavAnimation};

  @media (min-width: 1400px) {
      width: 6rem;
      height: 6rem;
  }

  svg {
    width: 4rem;
    height: 4rem;
    padding: 0.4rem;

    @media (max-width: 768px) {
      width: 15rem;
      height: 15rem;

      &:hover,
      &:focus {
        border: none;
      }
    }

    path {
      fill: ${secondary};
      transition: 0.375s ease-in-out;

      &:nth-of-type(2),
      &:nth-of-type(6) {
        fill: ${hightlightBlue};
      }

      &:hover,
      &focus {
        fill: ${primary};
      }
    }
  }
`;

export const NavMobile = styled.button`
  background: ${backgroundDark};
  border: none;
  outline: none;
  color: ${secondary};
  width: 2rem;
  height: 2rem;
  margin: 0.4rem 0;
  border-radius: 50%;
  display: none;
  transition: 0.375s ease-in-out;

  &:hover,
  &:focus {
    border: 1px solid ${primary};
    color: ${primary};
  }

  svg {
    width: 1.375rem;
    height: 1.375rem;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const NavMobileBar = styled.nav`
  position: sticky;
  z-index: 11;
  top: 0;
  height: 9vh;
  width: 100vw;
  display: none;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  background: ${backgroundDark};

  @media (max-width: 768px) {
    display: flex;
  }

  a {
    width: 3rem;
    height: 2.5rem;
    padding: 0;
    left: 0;
    margin: 1rem;
    svg {
      width: 2rem;
      height: 2.5rem;
    }
  }

  svg {
    color: ${secondary};
    position: absolute;
    right: 0;
    margin: 1rem;
    transition: 0.375s ease-in-out;
    &:hover,
    &:focus {
      color: ${primary};
    }
  }
`;
