import React, { useState } from "react";

import { Link } from "@fluentui/react-components";

// eslint-disable-next-line  no-undef
export type HighlightLinkProps  = {
  // eslint-disable-next-line  no-undef
  link: string,
  // eslint-disable-next-line  no-undef
  text: string;
}

export default function HighlightLink({link, text}: HighlightLinkProps) {

  const [showBold, setShowBold] = useState(false);

  return (
    <Link href={link} inline appearance="subtle">
      <span onMouseEnter={() => setShowBold(true)} onMouseLeave={() => setShowBold(false)} style={{ fontWeight: showBold ? "bold" : "normal"}}>
        {text}
      </span>
    </Link> 
  )
}