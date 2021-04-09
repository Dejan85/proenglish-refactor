import React from "react";
import { HeadingProps } from "./types";

function Heading(props: HeadingProps) {
  const { as = "h1", text } = props;
  const Wrapper = as;
  const className: string = `text__${as}`;
  return <Wrapper className={className}>{text}</Wrapper>;
}

export default Heading;
