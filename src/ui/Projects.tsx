import { Card, Divider, Label, Title3 } from "@fluentui/react-components";
import React, { useState } from "react";
import { projectsList } from "../data";
import { ProjectDetails } from "./ProjectDetails";
// eslint-disable-next-line  no-unused-vars
import { IStackItemStyles, IStackStyles, Stack, StackItem } from "@fluentui/react";
// eslint-disable-next-line  no-unused-vars
import { AnimatedVisibleContent } from "../components/AnimatedVisibleContent";

export default function Projects() {
  const [showProjects, setShowProjects] = useState(false)

  const showAllItemStyles: IStackStyles = {
    root: {
      paddingLeft: 16,
      paddingTop: 6,
    },
  };

  const projectItemStyles: IStackItemStyles = {
    root: {
      marginTop: 16,
    },
  };

  return (
    <>
      <Card appearance="outline">
        <Stack horizontal verticalAlign="center">
          <Title3>Projects {showProjects? null : "- " +projectsList.length+ " Projects"}</Title3>
          <StackItem styles={showAllItemStyles}>
            <Label role="presentation" onClick={() => setShowProjects(!showProjects)}>{showProjects ? "Collapse all" : "Show all"}</Label>
          </StackItem>
        </Stack>
        {showProjects && 
          <AnimatedVisibleContent>
            <Stack>
              <Divider />
              {projectsList.map((project) => 
                <StackItem key={project.name} styles={projectItemStyles}>
                  <ProjectDetails  project={project} />
                </StackItem>
              )}
            </Stack>
          </AnimatedVisibleContent>
        }
        <Label size="small">Still many projects are there from Avantari and Innovare, I will add in the coming days...</Label>
      </Card>
    </>
  )
}