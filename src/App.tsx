import React from 'react';

import {
  FluentProvider,
  webLightTheme,
  Divider,
  Title2,
  Link,
  Label,
} from "@fluentui/react-components";
import { Stack, IStackStyles, IStackTokens } from '@fluentui/react/lib/Stack';

export default function App() {

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

  return (
      <FluentProvider theme={webLightTheme}>
        <Divider></Divider>
      <Stack enableScopedSelectors styles={stackStyles} >
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
      </Stack>        
          
      </FluentProvider>
  );
}