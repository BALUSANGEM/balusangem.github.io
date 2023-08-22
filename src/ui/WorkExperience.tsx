import { Card, Divider, Title3 } from "@fluentui/react-components";
import React from "react";
import { workDetails } from "../data";
import { CompanyDetails } from "./CompanyDetails";

export default function WorkExperience() {
  return (
    <>
      <Card appearance="outline">
        <Title3>Work Experience</Title3>
        <Divider />
        {workDetails.map((workDetails) => 
          <CompanyDetails key={workDetails.company} workDetails={workDetails} />
        )}
      </Card>
    </>)
}