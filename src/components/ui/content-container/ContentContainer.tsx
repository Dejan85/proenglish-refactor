import React from "react";
import { WrapperType } from "~/src/global-types";
import { ContentContainerProps } from "./types";
import TextSide from "./TextSide";
import ImageSide from "./ImageSide";

const Wrapper: WrapperType = "div";
const className: string = "content-container";

const ContentContainer = (props: ContentContainerProps): JSX.Element => {
  const { children } = props;
  return <Wrapper className={className}>{children}</Wrapper>;
};

ContentContainer.TextSide = TextSide;
ContentContainer.ImageSide = ImageSide;

export default ContentContainer;
