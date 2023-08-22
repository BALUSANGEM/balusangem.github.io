import { Card, Divider, Label, Title3 } from "@fluentui/react-components";
import React, { useState } from "react";
import { projectsList } from "../data";
import { ProjectDetails } from "./ProjectDetails";
// eslint-disable-next-line  no-unused-vars
import { IStackStyles, Stack, StackItem } from "@fluentui/react";
import { AnimatedVisibleContent } from "../components/AnimatedVisibleContent";

export default function Projects() {
  const [showProjects, setShowProjects] = useState(false)

  const showAllItemStyles: IStackStyles = {
    root: {
      paddingLeft: 16,
      paddingTop: 6,
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
            <>
              <Divider />
              {projectsList.map((project) => 
                <ProjectDetails key={project.name} project={project} />
              )}
            </>
          </AnimatedVisibleContent>
        }
        <Label size="small">Still many projects are there from Avantari and Innovare, I will add in the coming days...</Label>
      </Card>
    </>
  )
}