import React, { useRef, useEffect } from "react";
import Nav from "../components/Nav/Nav.jsx";
import Landing from "../components/Landing-Page/Landing.jsx";
import { MainWrapper } from "./MainElements";
import {
  EmailWrapper,
  EmailComponent,
  EmailLine,
} from "../components/Email/Email.jsx";
import ProjectMain from "../components/Projects/ProjectMain.jsx";
import useWindowSize from "../hooks/useWindowSize";

const Main = () => {
  const size = useWindowSize();
  const main = useRef();
  const scrollContainer = useRef();

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  useEffect(() => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  }, [size.height]);

  const skewConfigs = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  const skewScrolling = () => {
    skewConfigs.current = window.scrollY;
    skewConfigs.previous +=
      (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

    const difference = skewConfigs.current - skewConfigs.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    scrollContainer.current.style.transform = `translateY(-${skewConfigs.rounded}px) skewY(${skew}deg)`;
    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <>
      <div ref={main} className="mainClass">
        <div ref={scrollContainer}>
          <MainWrapper>
            <Nav></Nav>
            <Landing></Landing>
            <EmailWrapper>
              <EmailLine></EmailLine>
              <EmailComponent
                href="mailto:npaarshar150@gmail.com"
                target="_blank"
                rel="noreffer"
                value="nparashar150@gmail.com"
              ></EmailComponent>
            </EmailWrapper>
          </MainWrapper>
          <ProjectMain />
        </div>
      </div>
    </>
  );
};

export default Main;
