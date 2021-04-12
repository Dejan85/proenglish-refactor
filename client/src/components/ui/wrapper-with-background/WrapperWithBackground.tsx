import React from "react";
import { WrapperType } from "~/src/global-types";
import { WrapperWithBackgroundProps } from "./types";

const Wrapper: WrapperType = "div";
const className: string = "wrapper-with-background";

const WrapperWithBackground = (
  props: WrapperWithBackgroundProps
): JSX.Element => {
  const { children } = props;
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default WrapperWithBackground;
