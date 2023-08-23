import { Divider } from "@fluentui/react-components";
import React from "react";
import { workDetails } from "../data";
import { CompanyDetails } from "./CompanyDetails";
// eslint-disable-next-line  no-unused-vars
import { IStackItemStyles, IStackStyles, Stack, StackItem } from "@fluentui/react";
import { AnimatedAccordian } from "../components/AnimatedAccordian";

export default function WorkExperience() {

  const companyDetailsItemStyles: IStackItemStyles = {
    root: {
      marginTop: 16,
    },
  };

  return (
    <AnimatedAccordian header="Work Experience" extendedHeader={"- " + workDetails.length + " Companies" }>
      <Stack>
        <Divider />
        {workDetails.map((workDetails) => 
          <StackItem key={workDetails.company} styles={companyDetailsItemStyles}>
            <CompanyDetails workDetails={workDetails} />
          </StackItem>
        )}
      </Stack>
    </AnimatedAccordian>)
}