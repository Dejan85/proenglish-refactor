import React from "react";
import { WrapperType } from "~/src/global-types";
import SmallLine from "./SmallLine";
import LargeLine from "./LargeLine";
import { LineProps } from "./types";

const Wrapper: WrapperType = "div";
const className: string = "line";

const Line = (props: LineProps): JSX.Element => {
  const { children, className: customClassName } = props;
  return (
    <Wrapper
      className={
        customClassName ? `${className} ${customClassName}` : className
      }
    >
      {children}
    </Wrapper>
  );
};

Line.SmallLine = SmallLine;
Line.LargeLine = LargeLine;

export default Line;
