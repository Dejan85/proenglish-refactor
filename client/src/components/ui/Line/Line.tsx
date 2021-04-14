import React from "react";
import { WrapperType } from "~/src/global-types";
import SmallLine from "./SmallLine";
import LargeLine from "./LargeLine";
import { LineProps } from "./types";

const Wrapper: WrapperType = "div";
const className: string = "line";

const Line = (props: LineProps): JSX.Element => {
  const { children } = props;
  return <Wrapper className={className}>{children}</Wrapper>;
};

Line.SmallLine = SmallLine;
Line.LargeLine = LargeLine;

export default Line;
