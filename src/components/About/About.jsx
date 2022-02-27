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
  AboutDetail
} from './AboutElements'
import AboutImageElement from './Assets/AboutImage.png'
import Fade from 'react-reveal/Fade'
import website from '../../data/website.json'

const About = () => {
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
              <AboutName value={website[0].userName} size="1.35rem" />
            </Fade>
          </AboutLeft>
          <AboutRight>
            <Fade cascade>
              <AboutHeading>About Me</AboutHeading>
            </Fade>
            <Fade cascade>
              <AboutDetailWrapper>
                <AboutDetail
                  dangerouslySetInnerHTML={{ __html: website[1].aboutUser }}
                />
              </AboutDetailWrapper>
            </Fade>
          </AboutRight>
        </AboutWrapper>
      </AboutSection>
    </div>
  )
}

export default About
