import React from "react";
import { WrapperType } from "~/src/global-types";
import { LabelProps } from "./types";

const Wrapper: WrapperType = "label";

const Label = (props: LabelProps) => {
  const { children, className } = props;
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Label;
