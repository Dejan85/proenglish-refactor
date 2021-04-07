import React, { memo } from "react";
import { ContainerProps } from "./types";
import { WrapperType } from "~/src/components/global-types";

const Container = (props: ContainerProps): JSX.Element => {
  const { children } = props;
  const Wrapper: WrapperType = "div";
  return <Wrapper className="container">{children}</Wrapper>;
};

export default memo(Container);
