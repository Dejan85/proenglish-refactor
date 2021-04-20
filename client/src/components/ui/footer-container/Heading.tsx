import React from "react";
import { WrapperType } from "~/src/global-types";
import { HeadingProps } from "./types";

const Wrapper: WrapperType = "div";

const Heading = (props: HeadingProps) => {
  const { children } = props;
  return <Wrapper className="footer-container__heading">{children}</Wrapper>;
};

export default Heading;
