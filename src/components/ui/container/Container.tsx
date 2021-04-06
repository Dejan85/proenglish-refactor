import React, { memo } from "react";
import { ContainerProps } from "./types";

const Container = (props: ContainerProps): JSX.Element => {
  const { children } = props;
  const Wrapper = "div";
  return <Wrapper className="container">{children}</Wrapper>;
};

export default memo(Container);
