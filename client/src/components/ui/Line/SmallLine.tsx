import React from "react";

import { WrapperType } from "~/src/global-types";

const Wrapper: WrapperType = "div";
const className: string = "small-line";

const SmallLine = () => {
  return <Wrapper className={className} />;
};

export default SmallLine;
