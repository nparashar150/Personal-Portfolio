import { useState, useEffect, useCallback } from "react";
import {
  SkillsSectionWrapper,
  SkillsWrapper,
  SkillName,
  SkillsFilter,
  SkillsHeading,
  Button,
  ButtonWrapper,
} from "./SkillsElements";
import SkillsData from "./SkillsData.json";
import Fade from "react-reveal/Fade";

const Skills = (props) => {
  let [skillsInfo, setSkillsInfo] = useState([]);
  let [listSkills, setListSkills] = useState(6);
  let [button, setButton] = useState(true);

  const showMoreItems = () => {
    if (SkillsData.data.length > listSkills) {
      setListSkills(listSkills + listSkills);
    }
  };

  const getSkillsInfo = useCallback(async () => {
    SkillsData.data.length <= listSkills && setButton(false);
    const SkillsShown = SkillsData.data.slice(0, listSkills);
    await setSkillsInfo(SkillsShown);
  }, [listSkills]);

  useEffect(() => {
    getSkillsInfo();
  }, [getSkillsInfo]);

  return (
    <>
      <SkillsSectionWrapper id={props.id}>
        <SkillsHeading>Skills</SkillsHeading>
        <SkillsWrapper>
          {Object.values(skillsInfo).map((element, key) => {
            return (
              <Fade key={key} cascade>
                <SkillName>
                  <SkillsFilter
                    width={element.percentage}
                    widthLeft={element.left}
                  >
                    {element.name}
                  </SkillsFilter>
                </SkillName>
              </Fade>
            );
          })}
        </SkillsWrapper>
        <ButtonWrapper>
            {button && (
              <Button onClick={() => showMoreItems()}>Show More</Button>
            )}
          </ButtonWrapper>
      </SkillsSectionWrapper>
    </>
  );
};

export default Skills;
