import React from "react";
import { TextProps } from "./types";

function Text(props: TextProps): JSX.Element {
  const { as = "p", text, className: customClassName } = props;
  const Wrapper = as;
  const className: string = "text";
  return (
    <Wrapper
      className={
        customClassName
          ? `${className} ${className} ${customClassName}`
          : className
      }
    >
      {text}
    </Wrapper>
  );
}

export default Text;
