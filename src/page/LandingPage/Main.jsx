import React from "react";
import Nav from "../../components/Shared/Nav/Nav";
import Landing from "../../components/LandingPage/Landing";
import { MainWrapper } from "./MainElements";
import {
  EmailWrapper,
  EmailComponent,
  EmailLine,
} from "../../components/Shared/Email/Email";
import ProjectMain from "../../components/Projects/ProjectMain.jsx";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact.jsx";
import Skills from "../../components/Skills/Skills.jsx";
const Main = () => {
  return (
    <>
      <div>
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
        <About id="about" />
        <Skills id="skills" />
        <ProjectMain id="projects" />
        <Contact id="contact" />
      </div>
    </>
  );
};

export default Main;