import React from "react";
import { HeadingProps } from "./types";

function Heading(props: HeadingProps): JSX.Element {
  const { as = "h1", text, className: customClassName } = props;
  const Wrapper = as;
  const className: string = `heading__${customClassName || as}`;
  return <Wrapper className={className}>{text}</Wrapper>;
}

export default Heading;
