import React, { useState, useEffect } from "react";
import Project from "./Project";
import { ProjectMainWrapper } from "./ProjectElements";
import ProjectData from "./ProjectData.json";
import StartMenu from "./ProjectLogo/StartMenu.svg";
// import AmazonKindle from "./AmazonKindle.svg";
// import NoteIt from "./Note.it.svg";
// import ColtEnigma from "./ColtEnigma.png"

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
      <ProjectMainWrapper>
        {Object.values(projectInfo).map((element) => {
          return (
            <Project
              name={element.name}
              img={StartMenu}
              value={element.content}
              to={{pathname: element.link}}
            />
          );
        })}
      </ProjectMainWrapper>
    </>
  );
};

export default ProjectMain;
