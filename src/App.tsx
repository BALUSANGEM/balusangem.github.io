import React from "react";

import {
  FluentProvider,
  webLightTheme,
  Divider,
  Title2,
  Link,
  Label,
  Badge,
} from "@fluentui/react-components";
// eslint-disable-next-line  no-unused-vars
import { Stack, IStackTokens, IStackStyles, IStackItemStyles, StackItem } from "@fluentui/react/lib/Stack";
import Company from "./Company";
import Projects from "./Projects";

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
    alignItems: "flex-start"
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
          <Stack horizontalAlign='center' verticalAlign='center'>
            <Title2>
              Balakrishna Sangem
            </Title2>
            <Label>
              Sofware Engineer at <Link href="https://everest.engineering/" inline>Everest.Engineering</Link> 
            </Label>
          </Stack>
        </Stack.Item>
        <Stack styles={socialStackStyles} tokens={horizontalGapStackTokens} horizontalAlign='center' verticalAlign='center' horizontal>     
          <Link href="https://www.linkedin.com/in/sbkcse/" inline>
            LinkedIn
          </Link>    
          <Link href="https://twitter.com/sbkurs" inline>
            Twitter
          </Link>
          <Link href="https://github.com/BALUSANGEM" inline>
            Github
          </Link>
        </Stack>
        <Stack horizontal>
          <Stack styles={leftPaneStackStyles}>
            <StackItem><Company /></StackItem>
          </Stack>
          <Stack styles={rightPaneStackStyles}>
            <Projects />
          </Stack>
        </Stack>
      </Stack>        
    </FluentProvider>
  );
}