import React from "react";
import { WrapperType, NavigationProps } from "../types";

const Link = (props: NavigationProps) => {
  const { children, text } = props;
  const Wrapper: WrapperType = "div";
  return <Wrapper>{text}</Wrapper>;
};

export default Link;
