import React from "react";
import { TextProps } from "./types";

function Text(props: TextProps): JSX.Element {
  const { as = "p", text, className: customClassName } = props;
  const Wrapper = as;
  const className: string = `text__${customClassName || as}`;
  return <Wrapper className={className}>{text}</Wrapper>;
}

export default Text;
