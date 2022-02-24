import {
  HeadingWrapper,
  Heading,
  HeadingLarge,
  InfoPara,
} from "./LandingElements";
import { Button } from "../Shared/Button/Button";
import Lottie from "react-lottie";
import animationData from "./lf30_NnBW3K.json";
import Resume from "./Resume.pdf";
import styled from "styled-components";
import website from "../../data/website.json";

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
  z-index: 5;

  @media (max-width: 768px) {
    bottom: 0;
  }

  @media (max-width: 320px), (max-height: 630px) {
    display: none;
  }
`;

const Landing = () => {
  const handleResumePdf = () => {
    window.open(Resume, "_blank");
  };
  return (
    <>
      <HeadingWrapper>
        <Heading>
          <span>{website[0].greetingMessage}</span>
          <HeadingLarge primary>{website[0].userName}</HeadingLarge>
          <HeadingLarge>{website[0].userDomain}</HeadingLarge>
        </Heading>
        <InfoPara dangerouslySetInnerHTML={{ __html: website[0].userBrief }} />
        <Button
          value={website[0].heroButtonName}
          onClick={handleResumePdf}
          size="1.3rem"
        ></Button>
      </HeadingWrapper>
      <LoadingWrapper href="#about" rel="noreferrer">
        <Lottie options={defaultOptions} width={50} height={50} />
      </LoadingWrapper>
    </>
  );
};

export default Landing;
