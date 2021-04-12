import React from "react";
import { HeadingProps } from "./types";

function Heading(props: HeadingProps): JSX.Element {
  const { as = "h1", className: customClassName, children } = props;
  const Wrapper = as;
  const className: string = "heading";
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

export default Heading;
