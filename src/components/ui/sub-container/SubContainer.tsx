import React from "react";
import { SubContainerProps } from "./types";
import { WrapperType } from "~/src/components/global-types";

const SubContainer = (props: SubContainerProps) => {
  const { children } = props;
  const Wrapper: WrapperType = "div";
  return <Wrapper className="sub-container">{children}</Wrapper>;
};

export default SubContainer;
