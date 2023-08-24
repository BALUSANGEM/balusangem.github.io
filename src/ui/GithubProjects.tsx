import React from "react";
import { Badge, Card, Label } from "@fluentui/react-components";
import { Stack } from "@fluentui/react/lib/Stack";
import HighlightLink from "../components/HighlightLink";
import { openSourcesList } from "../data";

export function GithubProjects() {
  return <Card appearance="outline">
    <Label size="large" weight="semibold">Github Projects</Label>
    <Stack verticalAlign="center">
      {openSourcesList.map((project) => 
        <Stack.Item key={project.name} style={{ paddingTop: 4, paddingBottom: 4 }}>
          <Stack>
            <HighlightLink text={project.name} link={project.link} />
            <Label>{project.description}</Label>
            <Stack.Item>
              <Badge style={{ marginRight: 8 }} appearance="tint" size="small" color="informative">{project.stars} stars</Badge>
              <Badge appearance="tint" size="small" color="informative">{project.forks} forks</Badge>
            </Stack.Item>
          </Stack>
        </Stack.Item>
      )}
    </Stack>
  </Card>;
}
