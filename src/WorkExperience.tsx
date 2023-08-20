import { Stack } from "@fluentui/react";
import { Card, Divider, Label, Title3 } from "@fluentui/react-components";
import React from "react";
import HighlightLink from "./HighlightLink";

export default function WorkExperience() {
  const workDetails = [
    {
      company: "Everest.Engineering",
      from: "Mar 2019",
      to: 0,
      role: "Senior Software Engineer",
      link: "https://everest.engineering/"
    },
    {
      company: "Avantari",
      from: "Mar 2017",
      to: "Mar 2019",
      role: "Software Engineer",
      link: "https://www.avantari.org/"
    },
    {
      company: "Innovare IT Solutions PvtLtd(Currently PlugXR)",
      from: "Sep 2015",
      to: "Jan 2017",
      role: "Software Engineer",
      link: "https://www.plugxr.com/"
    }
  ]
  return (
    <>
      <Card appearance="outline">
        <Title3>Work Experience</Title3>
        <Divider />
        {workDetails.map((workDetails) => 
          <Stack key={workDetails.company}>
            <HighlightLink text={workDetails.company} link={workDetails.link}/>
            <Label size="small">{workDetails.role}</Label>
            <Label size="small">From {workDetails.from} to {workDetails.to==0 ? "Present" : workDetails.to}</Label>
          </Stack>
        )}
      </Card>
    </>)
}