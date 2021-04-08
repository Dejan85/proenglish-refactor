import React from "react";
import { TextProps } from "../types";

function Text(props: TextProps) {
  const { as = "h1", text } = props;
  const Wrapper = as;
  return <Wrapper>{text}</Wrapper>;
}

export default Text;
