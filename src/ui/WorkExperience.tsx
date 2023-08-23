import { Card, Divider, Label, Title3 } from "@fluentui/react-components";
import React, { useState } from "react";
import { workDetails } from "../data";
import { CompanyDetails } from "./CompanyDetails";
import { AnimatedVisibleContent } from "../components/AnimatedVisibleContent";
// eslint-disable-next-line  no-unused-vars
import { IStackItemStyles, IStackStyles, Stack, StackItem } from "@fluentui/react";

export default function WorkExperience() {
  const [showCompanies, setShowCompanies] = useState(false)

  const showAllItemStyles: IStackStyles = {
    root: {
      paddingLeft: 16,
      paddingTop: 6,
    },
  };

  const companyDetailsItemStyles: IStackItemStyles = {
    root: {
      marginTop: 16,
    },
  };

  return (
    <>
      <Card appearance="outline">
        <Stack horizontal verticalAlign="center">
          <Title3>Work Experience {showCompanies? null : "- " +workDetails.length+ " Companies"}</Title3>
          <StackItem styles={showAllItemStyles}>
            <Label role="presentation" onClick={() => setShowCompanies(!showCompanies)}>{showCompanies ? "Collapse all" : "Show all"}</Label>
          </StackItem>
        </Stack>
        {showCompanies && 
          <AnimatedVisibleContent>
            <>
              <Divider />
              {workDetails.map((workDetails) => 
                <StackItem key={workDetails.company} styles={companyDetailsItemStyles}>
                  <CompanyDetails workDetails={workDetails} />
                </StackItem>
              )}
            </>
          </AnimatedVisibleContent>
        }        
      </Card>
    </>)
}