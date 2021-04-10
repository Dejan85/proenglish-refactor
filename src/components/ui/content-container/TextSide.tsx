import React from "react";
import { WrapperType } from "~/src/global-types";
import { ContentContainerProps } from "./types";

const Wrapper: WrapperType = "div";

const TextSide = (props: ContentContainerProps): JSX.Element => {
  const {
    children,
    className: customClassName,
    wrapContentToRight = false,
    wrapContentToLeft = false,
  } = props;
  const className: string = "text-side";
  const wrapClassName: string =
    (wrapContentToRight && "wrap-content-right") ||
    (wrapContentToLeft && "wrap-content-left") ||
    "";

  return (
    <Wrapper
      className={
        customClassName ? `${className} ${customClassName}` : className
      }
    >
      {wrapContentToRight || wrapContentToLeft ? (
        <Wrapper className={wrapClassName}>{children}</Wrapper>
      ) : (
        children
      )}
    </Wrapper>
  );
};

export default TextSide;
