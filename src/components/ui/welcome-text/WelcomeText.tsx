import React from "react";
import { WrapperType } from "~/src/global-types";

function WelcomeText(props) {
  const { children } = props;
  const Wrapper: WrapperType = "div";
  const className = "welcome-text";
  return <Wrapper className={className}>{children}</Wrapper>;
}

export default WelcomeText;
