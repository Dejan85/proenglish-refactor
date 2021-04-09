import React from "react";
import { WrapperType } from "~/src/global-types";
import { ContentContainerProps } from "./types";

const Wrapper: WrapperType = "div";

const TextSide = (props: ContentContainerProps): JSX.Element => {
  const { children, className: customClassName } = props;
  const className: string = "text-side";

  return (
    <Wrapper
      className={
        customClassName
          ? `${className} ${className} ${customClassName}`
          : className
      }
    >
      {children}
    </Wrapper>
  );
};

export default TextSide;
