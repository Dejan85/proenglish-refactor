import React from "react";
import { WrapperType } from "~/src/global-types";
import { ContentContainerProps } from "./types";
import TextSide from "./TextSide";
import ImageSide from "./ImageSide";

const WrapperTag: WrapperType = "div";

const ContentContainer = (props: ContentContainerProps): JSX.Element => {
  const {
    children,
    className: customClassName,
    width,
    height,
    alignItems,
    flexDirection,
  } = props;
  const className: string = "content-container";

  const style = { width, height, alignItems, flexDirection };

  return (
    <WrapperTag
      style={style}
      className={
        customClassName
          ? `${className} ${className} ${customClassName}`
          : className
      }
    >
      {children}
    </WrapperTag>
  );
};

ContentContainer.TextSide = TextSide;
ContentContainer.ImageSide = ImageSide;

export default ContentContainer;
