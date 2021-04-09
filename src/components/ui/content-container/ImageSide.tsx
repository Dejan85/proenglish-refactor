import React from "react";
import { ContentContainerProps } from "./types";
import { WrapperType } from "~/src/global-types";

const Wrapper: WrapperType = "div";

const ImageSide = (props: ContentContainerProps): JSX.Element => {
  const { children, className: customClassName } = props;
  const className: string = "image-side";

  console.log("test", customClassName);

  return (
    <Wrapper
      className={
        customClassName
          ? `${className} ${className}--${customClassName}`
          : className
      }
    >
      {children}
    </Wrapper>
  );
};

export default ImageSide;
