import { Stack, StackItem } from "@fluentui/react";
import { Card, Label } from "@fluentui/react-components";
import React from "react";
import HighlightLink from "../components/HighlightLink";
// eslint-disable-next-line  no-unused-vars
import { WorkAtCompanyDetails } from "../data";

export function CompanyDetails({ workDetails }: { workDetails: WorkAtCompanyDetails; }): JSX.Element {
  return <Card appearance="outline">
    <Stack verticalAlign="center">
      <HighlightLink text={workDetails.company} link={workDetails.link} />
      <StackItem>
        <Label size="small">{workDetails.role}</Label>
        <Label size="small"> from {workDetails.from} to {workDetails.to == 0 ? "Present" : workDetails.to}</Label>
      </StackItem>
      <StackItem>
        <Label size="small">{workDetails.learnings}</Label>
      </StackItem>
    </Stack>
  </Card>;
}
