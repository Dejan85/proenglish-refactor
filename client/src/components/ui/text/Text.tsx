import React from "react";
import { TextProps } from "./types";

function Text(props: TextProps): JSX.Element {
  const { as = "p", className: customClassName, children } = props;
  const Wrapper = as;
  const className: string = "default-paragraph";
  return (
    <Wrapper
      className={
        customClassName ? `${className} ${customClassName}` : className
      }
    >
      {children}
    </Wrapper>
  );
}

export default Text;
