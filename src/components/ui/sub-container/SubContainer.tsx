import React from "react";
import { SubContainerProps } from "./types";
import { WrapperType } from "~/src/global-types";

const Wrapper: WrapperType = "div";
const className: string = "sub-container";

const SubContainer = (props: SubContainerProps): JSX.Element => {
  const { children } = props;
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default SubContainer;
