import React from "react";
import {
  Title2,
  Label
} from "@fluentui/react-components";
import { Stack } from "@fluentui/react/lib/Stack";
import HighlightLink from "../components/HighlightLink";

export function Header() {
  return <Stack verticalAlign='center'>
    <Title2>
      Balakrishna Sangem
    </Title2>
    <Label>
      Sofware Engineer at{" "}
      <HighlightLink link="https://everest.engineering" text="Everest.Engineering" />
    </Label>
  </Stack>;
}
