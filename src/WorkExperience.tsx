import { Stack, StackItem } from "@fluentui/react";
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
      link: "https://everest.engineering/",
      learnings: "Joined as Software Engineer and is currently in the role of Senior Software Engineer. I worked with multiple clients and domains since I joined EverestEngineering. Responsibilities includes Developing features as per the client’s requirements, Lead feature development team and coordinate with other teams and Contribute to backend development as needed."
    },
    {
      company: "Avantari",
      from: "Mar 2017",
      to: "Mar 2019",
      role: "Software Engineer",
      link: "https://www.avantari.org/",
      learnings: "I worked on Bluetooth Low Energy based applications, Developed Internal company SDKs which are based on BLE. I worked on ARCore to develop some augmented reality apps, I did make sure the project is updated with the latest trends in Android development in terms of APIs and standards. \"I did make sure to use Kotlin as the primary language in Android development in every project\" is one of my accomplishments. I also developed some internal testing apps by closely working with the hardware team."
    },
    {
      company: "Innovare IT Solutions PvtLtd (Currently PlugXR)",
      from: "Sep 2015",
      to: "Jan 2017",
      role: "Software Engineer",
      link: "https://www.plugxr.com/",
      learnings: "I worked with a team to create complex UIs. I worked closely with the unity team to develop AR applications."
    }
  ]
  return (
    <>
      <Card appearance="outline">
        <Title3>Work Experience - 8 Years</Title3>
        <Divider />
        {workDetails.map((workDetails) => 
          <Card key={workDetails.company} appearance="outline">
            <Stack verticalAlign="center">
              <HighlightLink text={workDetails.company} link={workDetails.link}/>
              <StackItem>
                <Label size="small">{workDetails.role}</Label>
                <Label size="small"> from {workDetails.from} to {workDetails.to==0 ? "Present" : workDetails.to}</Label>
              </StackItem>
              <StackItem>
                <Label size="small">{workDetails.learnings}</Label>
              </StackItem>
            </Stack>
          </Card>
        )}
      </Card>
    </>)
}