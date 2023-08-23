import React from "react";

import {
  FluentProvider,
  webLightTheme,
  Divider,
  Label,
  Card,
} from "@fluentui/react-components";
// eslint-disable-next-line  no-unused-vars
import { Stack, IStackTokens, IStackStyles, StackItem } from "@fluentui/react/lib/Stack";
import WorkExperience from "./ui/WorkExperience";
import Projects from "./ui/Projects";
import { Header } from "./ui/Header";
import { Footer } from "./ui/Footer";
import { SocialLinks } from "./ui/SocialLinks";
import { OpenSourceandContributions } from "./ui/OpenSourceandContributions";

const stackStyles: IStackStyles = {
  root: {
    padding: 16
  },
};

export const socialStackStyles: IStackStyles = {
  root: {
    margin: 8,
  }
}

export const horizontalGapStackTokens: IStackTokens = {
  childrenGap: 10,
  padding: 10,
};

const leftPaneStackStyles: IStackStyles = {
  root: {
    padding: 16,
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
        <Stack.Item align="center">
          <Header />
        </Stack.Item>
        <SocialLinks />
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
            <OpenSourceandContributions />
          </Stack>
          <Stack styles={rightPaneStackStyles}>
            <Projects />
          </Stack>
        </Stack>
        <Label style={{paddingLeft: 20}}> Blogs and Open source contribution will be added in the coming days...</Label>
        <Footer />
      </Stack>        
    </FluentProvider>
  );
}