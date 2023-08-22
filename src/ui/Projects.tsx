import { Card, Divider, Label, Title3 } from "@fluentui/react-components";
import React from "react";
import { projectsList } from "../data";
import { ProjectDetails } from "./ProjectDetails";

export default function Projects() {
  return (
    <>
      <Card appearance="outline">
        <Title3>Projects</Title3>
        <Divider />
        {
          projectsList.map((project) => 
            <ProjectDetails key={project.name} project={project} />
          )
        }
        <Label size="small">Still many projects are there from Avantari and Innovare, I will add in the coming days...</Label>
      </Card>
    </>
  )
}