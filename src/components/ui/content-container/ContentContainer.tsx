import React from "react";
import { WrapperType } from "~/src/global-types";
import { ContentContainerProps } from "./types";
import TextSide from "./TextSide";
import ImageSide from "./ImageSide";
import Wrapper from "./Wrapper";

const WrapperTag: WrapperType = "div";
const className: string = "content-container";

const ContentContainer = (props: ContentContainerProps): JSX.Element => {
  const { children } = props;
  return <WrapperTag className={className}>{children}</WrapperTag>;
};

ContentContainer.TextSide = TextSide;
ContentContainer.ImageSide = ImageSide;
ContentContainer.Wrapper = Wrapper;

export default ContentContainer;
