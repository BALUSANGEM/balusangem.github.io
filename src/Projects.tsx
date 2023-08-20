import { Card, Divider, Label, Title3 } from "@fluentui/react-components";
import React from "react";

export default function Projects() {
  const projects = [
    {
      name: "EstimateOne",
      client: "EstimateOne",
      company: "Everest.Engineering",
      description: "Description for Estimateone and project details",
      contribution: "How did you contribute to this project",
      techstack: ["ReactJS", "NestJS"]
    },
    {
      name: "JTMS Driver App",
      client: "EstimateOne",
      company: "Everest.Engineering",
      description: "Description for Estimateone and project details",
      contribution: "How did you contribute to this project",
      techstack: ["ReactJS", "NestJS"]
    },
    {
      name: "Circles.Life App",
      client: "EstimateOne",
      company: "Everest.Engineering",
      description: "Description for Estimateone and project details",
      contribution: "How did you contribute to this project",
      techstack: ["ReactJS", "NestJS"]
    }
  ]
  return (
    <>
      <Card appearance="outline">
        <Title3>Projects</Title3>
        <Divider />
        {
          projects.map((project) => 
            <Label key={project.name}>{project.name}</Label>
          )
        }
      </Card>
    </>
  )
}