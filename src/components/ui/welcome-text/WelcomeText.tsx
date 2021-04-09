import React from "react";
import { WrapperType } from "~/src/global-types";
import { WelcomeTextProps } from "./types";

function WelcomeText(props: WelcomeTextProps) {
  const { children } = props;
  const Wrapper: WrapperType = "div";
  const className = "welcome-text";
  return <Wrapper className={className}>{children}</Wrapper>;
}

export default WelcomeText;
