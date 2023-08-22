import React from "react";
import { Label } from "@fluentui/react-components";
import { Stack } from "@fluentui/react/lib/Stack";
import HighlightLink from "../components/HighlightLink";

export function Footer() {
  return <Stack horizontalAlign="center" style={{ marginTop: 16, marginBottom: 8 }}>
    <Label disabled color="informative">Built by SBK©2023</Label>
    <Label disabled>Hosted on <HighlightLink link="https://github.com/BALUSANGEM/balusangem.github.io" text="Github" />, Design system is <HighlightLink link="https://react.fluentui.dev/" text="FluentUI" /> <HighlightLink link="https://react.dev/" text="ReactJS" /> </Label>
  </Stack>;
}
