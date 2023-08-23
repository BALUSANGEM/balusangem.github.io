import { animated, useSpring } from "@react-spring/web"
// eslint-disable-next-line  no-unused-vars
import React, { ReactElement } from "react";

export const AnimatedVisibleContent = ({ children} : any) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    to: { opacity: 1},
  });
  return <animated.div style={props}>{children}</animated.div>;
};