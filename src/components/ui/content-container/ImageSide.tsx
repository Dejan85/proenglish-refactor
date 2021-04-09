import React from "react";
import { ContentContainerProps } from "./types";
import { WrapperType } from "~/src/global-types";

const Wrapper: WrapperType = "div";
const className = "image-side";

const ImageSide = (props: ContentContainerProps): JSX.Element => {
  const { children } = props;

  return <Wrapper className={className}>{children}</Wrapper>;
};

export default ImageSide;
