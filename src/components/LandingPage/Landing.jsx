import React from "react";
import {
  HeadingWrapper,
  Heading,
  HeadingLarge,
  InfoPara
} from "./LandingElements";
import { Button } from "../Shared/Button/Button";
import Lottie from "react-lottie";
import animationData from "./lf30_NnBW3K.json";
import styled from "styled-components";

const defaultOptions = {
  loop: true,
  autoplay: true,
  name: "Loading Animation",
  render: "svg",
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const LoadingWrapper = styled.a`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  position: absolute;
  bottom: 2rem;

  @media (max-width: 768px) {
    bottom: 0;
  }

  @media (max-width: 320px), (max-height: 630px) {
    display: none;
  }
`;

const Landing = () => {
  return (
    <>
      <HeadingWrapper>
        <Heading>
          <span>Hi, my name is</span>
          <HeadingLarge primary>Naman Parashar.</HeadingLarge>
          <HeadingLarge>I am a Web Developer.</HeadingLarge>
        </Heading>
        <InfoPara>
          I’m a Full Stack Developer from India. I have <br /> great intrest in
          designing and coding for Web, I try <br /> to create great intuitive,
          dynamic user <br /> experiences.
        </InfoPara>
        <Button value="Say Hello" href="#contact" size="1.3rem"></Button>
      </HeadingWrapper>
      <LoadingWrapper href="#about" rel="noreferrer">
        <Lottie options={defaultOptions} width={50} height={50} />
      </LoadingWrapper>
    </>
  );
};

export default Landing;
