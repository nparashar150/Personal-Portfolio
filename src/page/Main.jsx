import React from "react";
import Nav from "../components/Nav/Nav.jsx";
import Landing from "../components/Landing-Page/Landing.jsx";
import { MainWrapper } from "./MainElements";
import {
  EmailWrapper,
  EmailComponent,
  EmailLine,
} from "../components/Email/Email.jsx";
const Main = () => {
  return (
    <>
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
    </>
  );
};

export default Main;