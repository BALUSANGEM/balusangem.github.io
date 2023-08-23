import { Card, Label, Title3 } from "@fluentui/react-components";
import React, { useCallback, useState } from "react";
// eslint-disable-next-line  no-unused-vars
import { IStackStyles, Stack, StackItem } from "@fluentui/react";
import { AnimatedVisibleContent } from "./AnimatedVisibleContent";

export function AnimatedAccordian({ header, extendedHeader, footer, children }: { header: string; extendedHeader: string; footer?: string | undefined; children: any; }) {

  //TODO Move this up chain in future
  const [showContent, setShowContent] = useState(false);

  const showAllItemStyles: IStackStyles = {
    root: {
      marginRight: 16,
    },
  };

  const updateContentVisibility = useCallback(() => {
    setShowContent(!showContent);
  }, [showContent, setShowContent]);

  return <Card appearance="outline">
    <Stack horizontal verticalAlign="center" disableShrink horizontalAlign="space-between" style={{ cursor: "pointer" }} role="presentation" onClick={updateContentVisibility}>
      <StackItem>
        <Title3>{header} {showContent ? null : extendedHeader}</Title3>
      </StackItem>
      <StackItem styles={showAllItemStyles}>
        <Label size="large" weight="semibold">{showContent ? "-" : "+"}</Label>
      </StackItem>
    </Stack>
    {showContent &&
      <AnimatedVisibleContent>
        {children}
      </AnimatedVisibleContent>}
    {footer && <Label size="small">{footer}</Label>}
  </Card>;
}
