import {
  SkillsSectionWrapper,
  SkillsWrapper,
  SkillName,
  SkillsFilter,
} from "./SkillsElements";

const Skills = () => {
  return (
    <>
      <SkillsSectionWrapper>
        <SkillsWrapper>
          <SkillName>
            <SkillsFilter width={"75%"} widthLeft={"25%"}>
              HTML
            </SkillsFilter>
          </SkillName>
          <SkillName>
            <SkillsFilter width={"80%"} widthLeft={"20%"}>
              CSS
            </SkillsFilter>
          </SkillName>
          <SkillName>
            <SkillsFilter width={"70%"} widthLeft={"30%"}>
              Javascript
            </SkillsFilter>
          </SkillName>
          <SkillName>
            <SkillsFilter width={"60%"} widthLeft={"40%"}>
              ReactJS
            </SkillsFilter>
          </SkillName>
          <SkillName>
            <SkillsFilter width={"65%"} widthLeft={"35%"}>
              Styled Components
            </SkillsFilter>
          </SkillName>
          <SkillName>
            <SkillsFilter width={"65%"} widthLeft={"35%"}>
              ExpressJS
            </SkillsFilter>
          </SkillName>
          <SkillName>
            <SkillsFilter width={"60%"} widthLeft={"40%"}>
              MongoDb
            </SkillsFilter>
          </SkillName>
          <SkillName>
            <SkillsFilter width={"80%"} widthLeft={"20%"}>
              Bash Scripting
            </SkillsFilter>
          </SkillName>
        </SkillsWrapper>
      </SkillsSectionWrapper>
    </>
  );
};

export default Skills;
