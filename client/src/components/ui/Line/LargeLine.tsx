import React from "react";
import { WrapperType } from "~/src/global-types";

const Wrapper: WrapperType = "div";
const className: string = "large-line";

const LargeLine = () => {
  return <Wrapper className={className} />;
};

export default LargeLine;
