import { Badge, Card, Label } from "@fluentui/react-components";
import React from "react";
// eslint-disable-next-line  no-unused-vars
import { Project } from "../data";
import { Stack } from "@fluentui/react";
import HighlightLink from "../components/HighlightLink";

export function ProjectDetails(
  project: Project) {

  const badgeItemStyle = {
    root: {
      paddingRight: 8,
    }
  };
  const badgeStackStyle = {
    root: {
      paddingTop: 8,
    }
  };
  const descriptionItemStyle = {
    root: {
      paddingTop: 4,
    }
  };

  return <Card appearance="outline">
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
            <Badge appearance="tint" size="small" color="informative">{stack}</Badge>
          </Stack.Item>
        ))}
      </Stack>
    </Stack>
  </Card>;
}
