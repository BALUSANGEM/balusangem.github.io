import React from "react";
import { Card, Label } from "@fluentui/react-components";
import { Stack } from "@fluentui/react/lib/Stack";
import { AnimatedAccordian } from "../components/AnimatedAccordian";
import HighlightLink from "../components/HighlightLink";
import { articlesList } from "../data";

export function OpenSourceandContributions() {
  return <AnimatedAccordian header="Open source and Contributions" extendedHeader="">
    <Card appearance="outline">
      <Label size="large" weight="semibold">Articles</Label>
      <Stack verticalAlign="center">
        {
          articlesList.map((article) => 
            <HighlightLink key={article.header} text={article.header} link={article.link} />
          )
        }  
      </Stack>
    </Card>
  </AnimatedAccordian>
}
