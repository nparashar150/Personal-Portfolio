import React, { useState, useEffect, useCallback } from 'react'
import Project from './Project'
import {
  ProjectMainWrapper,
  ProjectHeadingWrapper,
  ProjectHeading,
  ButtonWrapper
} from './ProjectElements'
import { Button } from '../Skills/SkillsElements'
import website from '../../data/website.json'

const ProjectMain = (props) => {
  let [projectInfo, setProjectInfo] = useState([])
  let [listProjects, setListProjects] = useState(4)
  let [button, setButton] = useState(true)

  const getProjectInfo = useCallback(async () => {
    website[3].data.length <= listProjects && setButton(false)
    const ProjectShown = website[3].data.slice(0, listProjects)
    await setProjectInfo(ProjectShown)
  }, [listProjects])

  const showMoreItems = () => {
    if (website[3].data.length > listProjects) {
      setListProjects(listProjects + listProjects)
    }
  }

  useEffect(() => {
    getProjectInfo()
  }, [getProjectInfo])

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
      <ButtonWrapper>
        {button && <Button onClick={() => showMoreItems()}>Show More</Button>}
      </ButtonWrapper>
    </>
  )
}

export default ProjectMain
