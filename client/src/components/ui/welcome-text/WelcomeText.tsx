import React from "react";
import { WrapperType } from "~/src/global-types";
import { WelcomeTextProps } from "./types";

const Wrapper: WrapperType = "div";
const className: string = "welcome-text";

function WelcomeText(props: WelcomeTextProps): JSX.Element {
  const { children } = props;
  return <Wrapper className={className}>{children}</Wrapper>;
}

export default WelcomeText;
