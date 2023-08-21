import React from "react";

import {
  FluentProvider,
  webLightTheme,
  Divider,
  Title2,
  Label,
  Badge,
  Card,
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
    padding: 16
  },
};

const rightPaneStackStyles: IStackStyles = {
  root: {
    padding: 16,
  },
};

export default function App() {


  return (
    <FluentProvider theme={webLightTheme}>
      <Divider></Divider>
      <Stack enableScopedSelectors styles={stackStyles} >
        <Stack.Item align="center" >
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
        <Stack>
          <StackItem styles={leftPaneStackStyles}>
            <Card appearance="outline">
              <Label size="medium">I am an <span style={{ fontWeight:"bold"}}>Android developer with 8 years of experience </span> and 1 year of ReactJS experience. I have worked in cross-functional teams using agile principles, and I am knowledgeable in Java, Kotlin, Android, Android Studio, Git, and Firebase. I also specialize in project management, communication, and code reviews, ensuring high-quality product delivery. I am eager to learn and stay up-to-date with the latest Android trends.</Label>
            </Card>
          </StackItem>
          <Stack styles={leftPaneStackStyles}>
            <StackItem><WorkExperience /></StackItem>
          </Stack>
          <Stack styles={rightPaneStackStyles}>
            <Projects />
          </Stack>
        </Stack>
        <Stack>
          <Stack.Item align="center" styles={workInProgresStyle}>
            <Label color="informative">Built by SBK©2023 using <HighlightLink link="https://react.dev/" text="ReactJS" /> and hosted on <HighlightLink link="https://github.com/BALUSANGEM/balusangem.github.io" text="Github" />, Design system is <HighlightLink link="https://react.fluentui.dev/" text="FluentUI"/> </Label>
          </Stack.Item>
        </Stack>
      </Stack>        
    </FluentProvider>
  );
}