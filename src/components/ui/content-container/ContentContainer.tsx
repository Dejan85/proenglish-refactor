import React from "react";
import { WrapperType } from "~/src/global-types";
import { ContentContainerProps } from "./types";
const Wrapper: WrapperType = "div";

const ContentContainer = (props: ContentContainerProps) => {
  const { children } = props;
  return <Wrapper>{children}</Wrapper>;
};

export default ContentContainer;
