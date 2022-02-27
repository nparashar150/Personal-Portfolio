import React, { useState, useEffect } from 'react'
import Project from './Project'
import {
  ProjectMainWrapper,
  ProjectHeadingWrapper,
  ProjectHeading
} from './ProjectElements'
import website from '../../data/website.json'

const ProjectMain = (props) => {
  let [projectInfo, setProjectInfo] = useState([])
  const getProjectInfo = async () => {
    setProjectInfo(await website[3].data)
    // console.log();
  }

  useEffect(() => {
    getProjectInfo()
  }, [])

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
          )
        })}
      </ProjectMainWrapper>
    </>
  )
}

export default ProjectMain
