import React from "react";
import { WrapperType, SubContainerProps } from "./types";

const SubContainer = (props: SubContainerProps) => {
  const { children } = props;
  const Wrapper: WrapperType = "div";
  return <Wrapper className="sub-container">{children}</Wrapper>;
};

export default SubContainer;
