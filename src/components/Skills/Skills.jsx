import { useState, useEffect } from "react";
import {
  SkillsSectionWrapper,
  SkillsWrapper,
  SkillName,
  SkillsFilter,
} from "./SkillsElements";

import SkillsData from "./SkillsData.json";

const Skills = () => {
  let [skillsInfo, setSkillsInfo] = useState([]);
  const getSkillsInfo = async () => {
    setSkillsInfo(await SkillsData.data);
  };

  useEffect(() => {
    getSkillsInfo();
  }, []);

  return (
    <>
      <SkillsSectionWrapper>
        <SkillsWrapper>
          {Object.values(skillsInfo).map((element) => {
            return (
              <SkillName>
                <SkillsFilter width={element.percentage} widthLeft={element.left}>
                  {element.name}
                </SkillsFilter>
              </SkillName>
            );
          })}
        </SkillsWrapper>
      </SkillsSectionWrapper>
    </>
  );
};

export default Skills;
