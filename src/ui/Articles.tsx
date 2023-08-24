import React from "react";
import { Card, Label } from "@fluentui/react-components";
import { Stack } from "@fluentui/react/lib/Stack";
import HighlightLink from "../components/HighlightLink";
import { articlesList } from "../data";

export function Articles() {
  return <Card appearance="outline">
    <Label size="large" weight="semibold">Articles</Label>
    <Stack verticalAlign="center">
      {articlesList.map((article) => <HighlightLink key={article.header} text={article.header} link={article.link} />
      )}
    </Stack>
  </Card>;
}
