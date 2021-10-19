import React from "react";
import {
  HeadingWrapper,
  Heading,
  HeadingLarge,
  InfoPara,
} from "./LandingElements";
import { Button } from "../Button/Button";

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
          I’m a Front-End Developer from India. I have <br /> great intrest
          in designing and coding for Web, I try <br /> to create great
          intuitive, dynamic user <br /> experiences.
        </InfoPara>
        <Button value="Say Hello" to="/contact" size="1.3rem"></Button>
      </HeadingWrapper>
    </>
  );
};

export default Landing;
