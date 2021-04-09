import React from "react";
import { WrapperType } from "~/src/global-types";
import { ContentContainerProps } from "./types";

const Wrapper: WrapperType = "div";
const className = "text-side";

const TextSide = (props: ContentContainerProps): JSX.Element => {
  const { children } = props;
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default TextSide;
