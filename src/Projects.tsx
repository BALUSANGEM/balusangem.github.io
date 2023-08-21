import { Badge, Card, Divider, Label, Title3 } from "@fluentui/react-components";
import React from "react";
import { projectsList } from "./data";
import { Stack } from "@fluentui/react";
import HighlightLink from "./HighlightLink";

export default function Projects() {

  const badgeItemStyle = {
    root: {
      paddingRight: 8,
    }
  }
  const badgeStackStyle = {
    root: {
      paddingTop: 8,
    }
  }
  const descriptionItemStyle = {
    root: {
      paddingTop: 4,
    }
  }
  return (
    <>
      <Card appearance="outline">
        <Title3>Projects</Title3>
        <Divider />
        {
          projectsList.map((project) => (
            <Card key={project.name} appearance="outline">
              <Stack>
                <Stack.Item><Label size="large">{project.name} </Label></Stack.Item>
                <Stack.Item styles={descriptionItemStyle}>
                  <Label size="small">{project.description} and </Label><HighlightLink link={project.companyLink} text="know more" />
                </Stack.Item>
                <Stack.Item styles={descriptionItemStyle}>
                  <Label size="small">{project.contribution}</Label>
                </Stack.Item>
                <Stack horizontal styles={badgeStackStyle}>
                  {project.techstack.map((stack) => (
                    <Stack.Item key={stack} styles={badgeItemStyle}>
                      <Badge appearance="tint" size="small" color="informative" >{stack}</Badge>
                    </Stack.Item>
                  ))}
                </Stack>
              </Stack>
            </Card>
          )
          )
        }
        <Label size="small">Still many projects are there from Avantari and Innovare, I will add in the coming days...</Label>
      </Card>
    </>
  )
}

