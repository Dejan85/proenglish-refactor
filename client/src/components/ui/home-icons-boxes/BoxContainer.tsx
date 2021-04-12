import React from "react";
import { WrapperType } from "~/src/global-types";
import { BoxContainer } from "./types";
const className = "box-container";
const Wrapper: WrapperType = "div";

function BoxContainer(props: BoxContainer) {
  const { children } = props;
  return <Wrapper className={className}>{children}</Wrapper>;
}

export default BoxContainer;
