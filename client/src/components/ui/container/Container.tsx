import React from "react";
import { ContainerProps } from "./types";
import { WrapperType } from "~/src/global-types";

const Wrapper: WrapperType = "div";
const className: string = "container";

const Container = (props: ContainerProps): JSX.Element => {
  const { children } = props;
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Container;
