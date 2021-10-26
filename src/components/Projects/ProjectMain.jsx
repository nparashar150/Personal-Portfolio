import React, { useState, useEffect } from "react";
import Project from "./Project";
import { ProjectMainWrapper, ProjectHeading } from "./ProjectElements";
import ProjectData from "./ProjectData.json";

const ProjectMain = () => {
  let [projectInfo, setProjectInfo] = useState([]);
  const getProjectInfo = async () => {
    setProjectInfo(await ProjectData.data);
    console.log();
  };

  useEffect(() => {
    getProjectInfo();
  }, []);

  return (
    <>
      {/* <ProjectHeading>Projects</ProjectHeading> */}
      <ProjectMainWrapper>
        {Object.values(projectInfo).map((element) => {
          return (
            <Project
              name={element.name}
              img={element.image}
              value={element.content}
              to={{ pathname: element.link }}
            />
          );
        })}
      </ProjectMainWrapper>
    </>
  );
};

export default ProjectMain;
