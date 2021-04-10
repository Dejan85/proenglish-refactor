import React from "react";
import { WrapperType } from "~/src/global-types";

const Wrapper: WrapperType = "div";
const SmallLine: WrapperType = "div";
const LargerLine: WrapperType = "div";
const className: string = "line";

const Line = (): JSX.Element => {
  return (
    <Wrapper className={className}>
      <SmallLine className={`${className}__small`} />
      <LargerLine className={`${className}__large`} />
    </Wrapper>
  );
};

export default Line;
