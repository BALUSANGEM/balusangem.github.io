import React from "react";

import {
  FluentProvider,
  webLightTheme,
  Divider,
  Title2,
  Label,
  Badge,
} from "@fluentui/react-components";
// eslint-disable-next-line  no-unused-vars
import { Stack, IStackTokens, IStackStyles, IStackItemStyles, StackItem } from "@fluentui/react/lib/Stack";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import HighlightLink from "./HighlightLink";

const stackStyles: IStackStyles = {
  root: {
    padding: 16
  },
};

const socialStackStyles: IStackStyles = {
  root: {
    margin: 8,
  }
}

const horizontalGapStackTokens: IStackTokens = {
  childrenGap: 10,
  padding: 10,
};

const workInProgresStyle: IStackItemStyles = {
  root: {
    paddingTop: 8,
    paddingBottom: 8
  }
}

const leftPaneStackStyles: IStackStyles = {
  root: {
    padding: 16,
    minWidth: 450
  },
};

const rightPaneStackStyles: IStackStyles = {
  root: {
    padding: 16,
    width: "100%",
  },
};

export default function App() {


  return (
    <FluentProvider theme={webLightTheme}>
      <Divider></Divider>
      <Stack enableScopedSelectors styles={stackStyles} >
        <Stack.Item align="center" styles={workInProgresStyle}>
          <Badge appearance="outline" color="danger">Portfolio is work in progress</Badge>
        </Stack.Item>
        <Stack.Item align="center">
          <Stack verticalAlign='center'>
            <Title2>
              Balakrishna Sangem
            </Title2>
            <Label>
              Sofware Engineer at{" "}
              <HighlightLink link="https://everest.engineering" text="Everest.Engineering"/>
            </Label>
          </Stack>
        </Stack.Item>
        <Stack styles={socialStackStyles} tokens={horizontalGapStackTokens} horizontalAlign='center' verticalAlign='center' horizontal>     
          <HighlightLink link="https://www.linkedin.com/in/sbkcse/" text="LinkedIn"/>   
          <HighlightLink link="https://twitter.com/sbkurs" text="Twitter"/>
          <HighlightLink link="https://github.com/BALUSANGEM" text="Github"/>
        </Stack>
        <Stack horizontal>
          <Stack styles={leftPaneStackStyles}>
            <StackItem><WorkExperience /></StackItem>
          </Stack>
          <Stack styles={rightPaneStackStyles}>
            <Projects />
          </Stack>
        </Stack>
      </Stack>        
    </FluentProvider>
  );
}