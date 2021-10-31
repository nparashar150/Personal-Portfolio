import React from "react";
import Nav from "../components/Nav/Nav.jsx";
import Landing from "../components/Landing-Page/Landing.jsx";
import { MainWrapper } from "./MainElements";
import {
  EmailWrapper,
  EmailComponent,
  EmailLine,
} from "../components/Email/Email.jsx";
import ProjectMain from "../components/Projects/ProjectMain.jsx";
import About from "../components/About/About.jsx";
import Contact from "../components/Contact/Contact.jsx";
import Skills from "../components/Skills/Skills.jsx";
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
        <Skills />
        <ProjectMain id="projects" />
        <Contact id="contact" />
      </div>
    </>
  );
};

export default Main;
