import React, { useState, useEffect } from "react";
import Project from "./Project";
import { ProjectMainWrapper, ProjectHeadingWrapper, ProjectHeading } from "./ProjectElements";
import ProjectData from "./ProjectData.json";

const ProjectMain = (props) => {
  let [projectInfo, setProjectInfo] = useState([]);
  const getProjectInfo = async () => {
    setProjectInfo(await ProjectData.data);
    // console.log();
  };

  useEffect(() => {
    getProjectInfo();
  }, []);

  return (
    <>
    <ProjectHeadingWrapper>
        <ProjectHeading>Projects</ProjectHeading>
      </ProjectHeadingWrapper>
      <ProjectMainWrapper id={props.id}>
        {Object.values(projectInfo).map((element, key) => {
          return (
            <Project
              name={element.name}
              img={element.image}
              value={element.content}
              to={{ pathname: element.link }}
              key={key}
            />
          );
        })}
      </ProjectMainWrapper>
    </>
  );
};

export default ProjectMain;
