import React from "react";
import { Divider } from "@fluentui/react-components";
import { AnimatedAccordian } from "../components/AnimatedAccordian";
import { GithubProjects } from "./GithubProjects";
import { Articles } from "./Articles";

export function OpenSourceandContributions() {
  return <AnimatedAccordian header="Open source and Contributions" extendedHeader="">
    <>
      <Divider />
      <div style={{marginTop: 16}}>
        <Articles />
      </div>
      <div style={{marginTop: 16}}>
        <GithubProjects />
      </div>
    </>
  </AnimatedAccordian>
}

