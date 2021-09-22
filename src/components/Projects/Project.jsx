import React from "react";
import StartMenu from "./StartMenu.svg";
import {
  ProjectWrapper,
  ProjectPreview,
  ProjectImage,
  ProjectName,
  ProjectConnect,
  ProjectDetail,
  ProjectLink,
  ProjectDataDetail,
} from "./Projectelement";

const flex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh"
}

const Project = () => {
  return (
    <>
      <div style={flex}>
        <ProjectWrapper>
          <ProjectPreview>
            <ProjectImage src={StartMenu} alt=""></ProjectImage>
            <ProjectName>Windows 11</ProjectName>
          </ProjectPreview>
          <ProjectDetail>
            <ProjectDataDetail>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book
            </ProjectDataDetail>
            <ProjectConnect>
              <ProjectLink to={{}}></ProjectLink>

              <ProjectLink to={{}}></ProjectLink>
            </ProjectConnect>
          </ProjectDetail>
        </ProjectWrapper>
      </div>
    </>
  );
};

export default Project;
