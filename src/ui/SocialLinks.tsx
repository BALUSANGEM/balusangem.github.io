import React from "react";
import { Stack } from "@fluentui/react/lib/Stack";
import HighlightLink from "../components/HighlightLink";
import { socialStackStyles, horizontalGapStackTokens } from "../App";

export function SocialLinks() {
  return <Stack styles={socialStackStyles} tokens={horizontalGapStackTokens} horizontalAlign='center' verticalAlign='center' horizontal>
    <HighlightLink link="https://www.linkedin.com/in/sbkcse/" text="LinkedIn" />
    <HighlightLink link="https://twitter.com/sbkurs" text="Twitter" />
    <HighlightLink link="https://github.com/BALUSANGEM" text="Github" />
  </Stack>;
}
