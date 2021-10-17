import React from "react";

import {
  ProjectWrapper,
  ProjectPreview,
  ProjectImage,
  ProjectName,
  ProjectDetail,
  ProjectDataDetail,
} from "./ProjectElements";

const flex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "10vw",
  height: "40vh",
};

const Project = (props) => {
  return (
    <>
      <div style={flex}>
        <ProjectWrapper target={"_blank"} to={props.to} >
          <ProjectPreview>
            <ProjectImage src={props.img} alt=""></ProjectImage>
            <ProjectName>{props.name}</ProjectName>
          </ProjectPreview>
          <ProjectDetail>
            <ProjectDataDetail>{props.value}</ProjectDataDetail>
          </ProjectDetail>
        </ProjectWrapper>
      </div>
    </>
  );
};

export default Project;
