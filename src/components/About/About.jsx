import {
  AboutSection,
  AboutWrapper,
  AboutHeading,
  AboutImageWrapper,
  AboutImage,
  AboutImageFilter,
  AboutName,
  AboutLeft,
  AboutRight,
  AboutDetailWrapper,
  AboutDetail,
} from "./AboutElements";
import AboutImageElement from "./Assets/AboutImage.png";
import Fade from "react-reveal/Fade";

const About = (props) => {
  return (
    <div id="about">
      <AboutSection>
        <AboutWrapper>
          <AboutLeft>
            <Fade cascade>
              <AboutHeading>About Me</AboutHeading>
            </Fade>
            <Fade cascade>
              <AboutImageWrapper>
                <AboutImage src={AboutImageElement} />
                <AboutImageFilter />
              </AboutImageWrapper>
              <AboutName value="Naman Parashar" size="1.35rem" />
            </Fade>
          </AboutLeft>
          <AboutRight>
            <Fade cascade>
              <AboutHeading>About Me</AboutHeading>
            </Fade>
            <Fade cascade>
              <AboutDetailWrapper>
                <AboutDetail>
                  Hello! My name is Naman Parashar, I am a budding Full Stack
                  developer from India. My interest in Web Development started
                  back in 2020 when I decided to contribute to ACE!
                  <br /> <br />
                  Right now I am pursuing Bachelor of Computer Application from
                  Guru Gobind Singh Indraprastha University. I am looking for
                  opportunities that will help me in growing my tech knowledge.I
                  am still a learner who still needs to learn lot of new things.
                  I love to code, watch anime and listen music.
                </AboutDetail>
              </AboutDetailWrapper>
            </Fade>
          </AboutRight>
        </AboutWrapper>
      </AboutSection>
    </div>
  );
};

export default About;
