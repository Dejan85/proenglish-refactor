import React from "react";
import { ContainerProps } from "./types";
import { WrapperType } from "~/src/global-types";

const Container = (props: ContainerProps): JSX.Element => {
  const { children } = props;
  const Wrapper: WrapperType = "div";
  return <Wrapper className="container">{children}</Wrapper>;
};

export default Container;
