import { useTransition, animated } from "@react-spring/web"
// eslint-disable-next-line  no-unused-vars
import React, { ReactElement } from "react";

export function AnimatedVisibleContent(
  {children}: {children:ReactElement}
) {
  const transitions = useTransition([1], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  return transitions((style) => (
    <animated.div style={style}>
      {children}
    </animated.div>))
} 