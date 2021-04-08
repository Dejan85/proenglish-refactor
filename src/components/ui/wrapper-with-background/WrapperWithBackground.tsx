import React from "react";
import { WrapperType } from "~/src/global-types";
import { WrapperWithBackgroundProps } from "./types";

const WrapperWithBackground = (props: WrapperWithBackgroundProps) => {
  const Wrapper: WrapperType = "div";
  const { children } = props;
  return <Wrapper className="wrapper-with-background">{children}</Wrapper>;
};

export default WrapperWithBackground;
