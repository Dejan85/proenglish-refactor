import React from "react";
import { TextProps } from "./types";

function Text(props: TextProps): JSX.Element {
  const { as = "h1", text } = props;
  const Wrapper = as;
  const className: string = `text__${as}`;
  return <Wrapper className={className}>{text}</Wrapper>;
}

export default Text;
