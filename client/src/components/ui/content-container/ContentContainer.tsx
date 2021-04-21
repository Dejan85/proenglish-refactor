import React from "react";
import { WrapperType } from "~/src/global-types";
import { ContentContainerProps } from "./types";

const WrapperTag: WrapperType = "div";

const ContentContainer = (props: ContentContainerProps): JSX.Element => {
  const {
    children,
    className: customClassName,
    width,
    maxWidth,
    height,
    maxHeight,
    alignItems,
    justifyContent,
    flexDirection,
    alignSelf,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    padding,
    outline,
    borderRadius,
    position,
    top,
    bottom,
    left,
    right,
    backgroundImage,
  } = props;
  const className: string = "content-container";

  const style: ContentContainerProps = {
    width,
    maxWidth,
    height,
    maxHeight,
    alignItems,
    justifyContent,
    flexDirection,
    alignSelf,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    padding,
    outline,
    borderRadius,
    position,
    top,
    bottom,
    left,
    right,
  };

  if (backgroundImage) {
    style.backgroundImage = `url(${backgroundImage})`;
  }

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

export default ContentContainer;
