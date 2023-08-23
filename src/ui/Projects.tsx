import { Divider } from "@fluentui/react-components";
import React from "react";
import { projectsList } from "../data";
import { ProjectDetails } from "./ProjectDetails";
// eslint-disable-next-line  no-unused-vars
import { IStackItemStyles, Stack, StackItem } from "@fluentui/react";
// eslint-disable-next-line  no-unused-vars
import { AnimatedAccordian } from "../components/AnimatedAccordian";

export default function Projects() {

  const projectItemStyles: IStackItemStyles = {
    root: {
      marginTop: 16,
    },
  };

  return (
    <>
      <AnimatedAccordian header="Projects" extendedHeader={"- " + projectsList.length} footer="Still many projects are there from Avantari and Innovare, I will add in the coming days...">
        <Stack>
          <Divider />
          {projectsList.map((project) => <StackItem key={project.name} styles={projectItemStyles}>
            <ProjectDetails project={project} />
          </StackItem>
          )}
        </Stack>
      </AnimatedAccordian>
    </>
  )
}